/*
  Warnings:

  - You are about to drop the `Habilidade` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tipo` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Pokemon" ADD COLUMN "habilidades" TEXT;
ALTER TABLE "Pokemon" ADD COLUMN "tipos" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Habilidade";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tipo";
PRAGMA foreign_keys=on;
