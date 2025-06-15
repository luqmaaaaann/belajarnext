import { CreateForm, DeleteForm } from "@/components/form";
import Link from "next/link";

export default async function Home() {
  //server side
  const res = await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB");
  const datacoba = await res.json();

  return (
    <main className="max-w-3xl m-auto my-4 space-y-12">
      <CreateForm />
      <h2 className="text-2xl font-bold">Products</h2>
      <div>
        {datacoba.data.map((todo) => {
          return (
            <div key={todo._id} className="space-y-3 border p-4 rounded-lg">
              <div className="text-lg font-medium">{todo.title}</div>
              <div>{todo.content}</div>
              <div className="flex gap-2">
                <Link
                  href={`/todos/${todo._id}`}
                  className="bg-indigo-500 text-white p-2 rounded-lg"
                >
                  View Details
                </Link>
                <DeleteForm id={todo._id} />
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
