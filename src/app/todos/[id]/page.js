import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB/${id}`
  );
  const todo = await res.json();

  return (
    <main className="max-w-3xl m-auto my-12 space-y-6">
      <div className="text-lg font-medium">{todo.title}</div>
      <div>{todo.content}</div>
      <div className="flex gap-4 items-center">
        <Link href="/" className="text-indigo-600">
          Back to Todolist
        </Link>
        <Link href={`/todos/${id}/edit`}>
          <Button className="w-fit">Edit Todo</Button>
        </Link>
      </div>
    </main>
  );
}
