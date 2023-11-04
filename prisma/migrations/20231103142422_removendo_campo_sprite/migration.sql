/*
  Warnings:

  - You are about to drop the column `spriteImage` on the `Pokemon` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);
INSERT INTO "new_Pokemon" ("id", "nome") SELECT "id", "nome" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
CREATE UNIQUE INDEX "Pokemon_nome_key" ON "Pokemon"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
