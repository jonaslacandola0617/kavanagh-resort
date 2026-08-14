import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const expected = [
  "ad43829f9f99c60a",
  "8df2be62805e095c",
  "843fda4b751d0d68",
  "65780398229f343c",
  "47df53136124b177",
  "6c58808a5c1c4731",
  "e19a8104014bdf85",
];
const expectedBase64Length = 46248;
const expectedImageSha256 = "3e356a724b8abac1a2daa8e97474c786c376feeff6a7aee7257c73bcdd26b96c";

const chunks = [];
for (let index = 0; index < expected.length; index += 1) {
  const path = join(process.cwd(), "src", "lib", "hero-chunks", `${index}.ts`);
  const source = await readFile(path, "utf8");
  const match = source.match(/^export default "([A-Za-z0-9+/=]+)";\s*$/);
  if (!match) throw new Error(`Hero chunk ${index} has an invalid format.`);

  const value = match[1];
  const digest = createHash("sha256").update(value).digest("hex").slice(0, 16);
  if (digest !== expected[index]) {
    throw new Error(`Hero chunk ${index} checksum mismatch: ${digest}`);
  }
  chunks.push(value);
}

const base64 = chunks.join("");
if (base64.length !== expectedBase64Length) {
  throw new Error(`Hero base64 length mismatch: ${base64.length}`);
}

const image = Buffer.from(base64, "base64");
const imageDigest = createHash("sha256").update(image).digest("hex");
if (imageDigest !== expectedImageSha256) {
  throw new Error(`Hero image checksum mismatch: ${imageDigest}`);
}
if (image.subarray(0, 4).toString("ascii") !== "RIFF" || image.subarray(8, 12).toString("ascii") !== "WEBP") {
  throw new Error("Reconstructed hero is not a valid WebP container.");
}

const target = join(process.cwd(), "public", "images", "kavanagh-hero-calm.webp");
await mkdir(dirname(target), { recursive: true });
await writeFile(target, image);
console.log(`Verified Kavanagh hero: ${image.length} bytes (${imageDigest.slice(0, 12)}…)`);
