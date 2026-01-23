"use client";

import Link from "next/link";

const nav = [
  { href: "/staff/doctor", label: "Dashboard" },
  { href: "/staff/doctor/patients", label: "Patients" },
  { href: "/staff/doctor/notes", label: "Notes" },
  { href: "/staff/doctor/prescriptions", label: "Prescriptions" },
  { href: "/staff/doctor/labs", label: "Labs" },
];

export default function DoctorHeader() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-4">
        <span className="font-semibold">Doctor Portal</span>
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
