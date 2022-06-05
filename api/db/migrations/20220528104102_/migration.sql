/*
  Warnings:

  - A unique constraint covering the columns `[userId,postId]` on the table `UsersOnPosts` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UsersOnPosts_userId_postId_key" ON "UsersOnPosts"("userId", "postId");
