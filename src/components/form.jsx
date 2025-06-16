"use client";

import { useActionState } from "react";
import { createTodoAction, deleteTodoAction } from "../app/action";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export const CreateForm = () => {
  const [state, action, pending] = useActionState(createTodoAction, null);
  return (
    <main className="bg-grey-50">
      <form action={action}>
        <input
          name="title"
          placeholder="Title"
          className="border border-zinc-300 p-2 rounded-lg w-full"
        />
        <textarea
          name="content"
          placeholder="Content"
          className="border border-zinc-300 p-2 rounded-lg w-full"
        />
        <Button
          disabled={pending}
          className="p-2 bg-black text-white font-medium rounded-lg w-full"
        >
          Create Todo
        </Button>
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
  const handleDelete = async () => {
    const formData = new FormData();
    formData.append("id", id);
    await deleteTodoAction(formData);
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete from our
            servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// export const DeleteForm = ({ id, title, className }) => {
//   const handleDelete = async () => {
//     const formData = new FormData();
//     formData.append("id", id);
//     await deleteTodoAction(formData);
//   };

//   return (
//     <AlertDialog>
//       <AlertDialogTrigger asChild>
//         <Button variant="destructive" size="sm" className={className}>
//           Delete
//         </Button>
//       </AlertDialogTrigger>
//       <AlertDialogContent className="sm:max-w-[425px]">
//         <AlertDialogHeader>
//           <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
//           <AlertDialogDescription>
//             This action cannot be undone. This will permanently delete
//             {title ? ` "${title}"` : " this todo"} and remove your data from our
//             servers.
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel>Cancel</AlertDialogCancel>
//           <AlertDialogAction
//             onClick={handleDelete}
//             className="bg-red-600 hover:bg-red-700 focus:ring-red-600 p-2 rounded"
//           >
//             Continue
//           </AlertDialogAction>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//   );
// };

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
