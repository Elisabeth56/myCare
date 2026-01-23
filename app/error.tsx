"use client";

import { useEffect } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center gap-4">
      <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
      <p className="text-sm text-muted-foreground">{error.message}</p>
      <button
        onClick={reset}
        className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/90 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
