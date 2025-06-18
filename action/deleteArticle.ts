

"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteArticle = async (articleId: string) => {
  if (!articleId) throw new Error("Invalid article ID");

  try {
    console.log("Deleting likes...");
    await prisma.like.deleteMany({ where: { articleId } });

    console.log("Deleting comments...");
    await prisma.comment.deleteMany({ where: { articleId } });

    console.log("Deleting article...");
    await prisma.articles.delete({ where: { id: articleId } });

    console.log("Article deleted successfully.");
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error deleting article:", error);
    throw error;
  }
};
