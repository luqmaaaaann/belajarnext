import React from "react";

export default function Layout({ children }) {
  return (
    <main className="min-h-screen m-auto">
      <div>{children}</div>
    </main>
  );
}
