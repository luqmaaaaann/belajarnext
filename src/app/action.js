"use server";

import { revalidatePath } from "next/cache";

export async function createTodoAction(_, formData) {
  const title = formData.get("title");
  const content = formData.get("content");

  // Simple Validation
  if (!title || !content) {
    return {
      status: "error",
      message: "title and content are required",
    };
  }

  // Very very take time
  await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([{ title, content }]),
  });
  revalidatePath("/");
  return {
    status: "success",
    message: "Todo has been added",
  };
}

export async function deleteTodoAction(formData) {
  const todoId = formData.get("id");

  await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([todoId]),
  });
  revalidatePath("/");
}

// export async function updateTodoAction(formData) {
//   const title = formData.get("title");
//   const content = formData.get("content");

//   await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify([{ title, content }]),
//   });
//   revalidatePath("/");
// }
