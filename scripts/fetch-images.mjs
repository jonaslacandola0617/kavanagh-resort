import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const images = [
  "bonfire.jpg",
  "family-cottage.jpg",
  "family-pool.jpg",
  "grand-cottage.jpg",
  "grounds.jpg",
  "group.jpg",
  "hero-pool.jpg",
  "kavanagh-cover.png",
  "kavanagh-hut.jpg",
  "pool-deck.jpg",
  "villa-exterior.jpg",
  "villa-kitchen.jpg",
  "villa-living.jpg",
  "water-play.jpg",
];

const outputDir = join(process.cwd(), "public", "images");
await mkdir(outputDir, { recursive: true });

for (const name of images) {
  const target = join(outputDir, name);
  if (existsSync(target)) continue;

  const url = `https://raw.githubusercontent.com/jonaslacandola0617/kavanagh-resort/main/public/images/${name}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${name}: ${response.status} ${response.statusText}`);
  }

  await writeFile(target, Buffer.from(await response.arrayBuffer()));
  console.log(`Fetched ${name}`);
}
