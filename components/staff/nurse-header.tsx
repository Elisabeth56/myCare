"use client";

import Link from "next/link";

const nav = [
  { href: "/staff/nurse", label: "Dashboard" },
  { href: "/staff/nurse/vitals", label: "Vitals" },
  { href: "/staff/nurse/medication", label: "Medication" },
  { href: "/staff/nurse/status", label: "Status" },
];

export default function NurseHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <span className="font-semibold">Nurse Station</span>
        <nav className="hidden md:flex gap-4 text-sm">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
