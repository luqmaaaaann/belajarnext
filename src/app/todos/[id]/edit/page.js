import { updateTodoAction } from "./action";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB/${id}`
  );
  const todo = await res.json();

  return (
    <main className="max-w-3xl m-auto my-12 space-y-6">
      <form action={updateTodoAction}>
        <input name="id" defaultValue={id} readOnly hidden />
        <input name="title" defaultValue={todo.title} />
        <textarea name="content" defaultValue={todo.content}></textarea>
        <button>Update</button>
      </form>
    </main>
  );
}
