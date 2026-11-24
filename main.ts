import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "One star. My human opens the treat bag at 3 a.m., then acts shocked when I scream. Zero consistency, would not rehire as staff.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY);
