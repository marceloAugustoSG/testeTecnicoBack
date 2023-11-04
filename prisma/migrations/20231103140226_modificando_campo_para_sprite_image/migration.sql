/*
  Warnings:

  - You are about to drop the column `sprite` on the `Pokemon` table. All the data in the column will be lost.
  - Added the required column `spriteImage` to the `Pokemon` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "spriteImage" TEXT NOT NULL
);
INSERT INTO "new_Pokemon" ("id", "nome") SELECT "id", "nome" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
CREATE UNIQUE INDEX "Pokemon_nome_key" ON "Pokemon"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
