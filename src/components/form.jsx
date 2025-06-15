"use client";

import { useActionState } from "react";
import { createTodoAction, deleteTodoAction } from "../app/action";

export const CreateForm = () => {
  const [state, action, pending] = useActionState(createTodoAction, null);
  return (
    <main>
      <form action={action}>
        <input name="title" placeholder="Title" />
        <textarea name="content" placeholder="Content" />
        <button disabled={pending}>Create Todo</button>
        {state?.status === "error" && (
          <div className="text-red-500">{state?.message}</div>
        )}
        {state?.status === "success" && (
          <div className="text-emerald-600">{state?.message}</div>
        )}
      </form>
    </main>
  );
};

export const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTodoAction}>
      <input hidden name="id" value={id} readOnly />
      <button className="w-fit">Delete</button>
    </form>
  );
};

// export const UpdateForm = () => {
//   return (
//     <main>
//       <form action={updateTodoAction}>
//         <input name="title" placeholder="Title" />
//         <textarea name="content" placeholder="Content" />
//         <button>Create Todo</button>
//       </form>
//     </main>
//   );
// };
