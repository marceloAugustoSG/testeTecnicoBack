-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pokemon" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "spriteImage" TEXT
);
INSERT INTO "new_Pokemon" ("id", "nome", "spriteImage") SELECT "id", "nome", "spriteImage" FROM "Pokemon";
DROP TABLE "Pokemon";
ALTER TABLE "new_Pokemon" RENAME TO "Pokemon";
CREATE UNIQUE INDEX "Pokemon_nome_key" ON "Pokemon"("nome");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
