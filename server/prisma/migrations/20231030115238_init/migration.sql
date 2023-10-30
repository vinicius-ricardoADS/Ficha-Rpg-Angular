-- CreateTable
CREATE TABLE "Chip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "strength" INTEGER NOT NULL,
    "ability" TEXT NOT NULL,
    "armor" INTEGER NOT NULL,
    "fire_power" INTEGER NOT NULL,
    "class" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "experience_points" INTEGER NOT NULL
);
