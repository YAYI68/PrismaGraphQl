-- CreateTable
CREATE TABLE "User" (
    "author" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_author_key" ON "User"("author");
