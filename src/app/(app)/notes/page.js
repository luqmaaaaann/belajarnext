import { Card, CardContent } from "@/components/ui/card";
import moment from "moment";

export default async function Page() {
  const res = await fetch("https://v1.appbackend.io/v1/rows/SW0N9gnpdfYB");
  const { data: notes } = await res.json();
  return (
    <div className="space-y-4 py-8">
      <h3>All Notes</h3>
      <div className="space-y-4">
        {notes.map((note) => {
          return (
            <Card key={note._id}>
              <CardContent>
                <h3 className="text-lg font-medium">{note.title}</h3>
                <p className="text-sm">{note.content}</p>
                <p className="text-sm">{note.money}</p>
                <p className="text-sm text-zinc-300">
                  {moment(note.createdAt).format("MMM Do, YYYY")}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
