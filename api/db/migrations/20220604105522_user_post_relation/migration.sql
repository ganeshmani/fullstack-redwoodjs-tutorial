/*
  Warnings:

  - You are about to drop the `UsersOnPosts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UsersOnPosts" DROP CONSTRAINT "UsersOnPosts_postId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnPosts" DROP CONSTRAINT "UsersOnPosts_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "UsersOnPosts";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
