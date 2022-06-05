-- CreateTable
CREATE TABLE "UsersOnPosts" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "roles" "Role" NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "UsersOnPosts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UsersOnPosts_userId_postId_key" ON "UsersOnPosts"("userId", "postId");

-- AddForeignKey
ALTER TABLE "UsersOnPosts" ADD CONSTRAINT "UsersOnPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnPosts" ADD CONSTRAINT "UsersOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
