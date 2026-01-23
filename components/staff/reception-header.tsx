"use client";

import Link from "next/link";

const nav = [
  { href: "/staff/reception", label: "Dashboard" },
  { href: "/staff/reception/register", label: "Register Patient" },
  { href: "/staff/reception/appointments", label: "Appointments" },
  { href: "/staff/reception/queue", label: "Queue" },
  { href: "/staff/reception/insurance", label: "Insurance" },
];

export default function ReceptionHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <span className="font-semibold">Reception Desk</span>
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
