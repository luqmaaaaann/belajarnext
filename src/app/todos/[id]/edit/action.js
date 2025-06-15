"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateTodoAction(formData) {
  const id = formData.get("id");
  const title = formData.get("title");
  const content = formData.get("content");

  //Update a row on appbackend
  await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: id, title, content }),
  });

  //doing refresh page
  revalidatePath("/");
  //showing result for update
  redirect("/");
}
