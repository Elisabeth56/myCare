"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center gap-4">
      <h1 className="text-2xl font-bold text-gray-700">Page Not Found</h1>
      <p className="text-sm text-muted-foreground">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/90 transition-colors"
      >
        Go Home
      </Link>
    </div>
  );
}
