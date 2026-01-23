"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const nav = [
  { href: "/patient", label: "Dashboard" },
  { href: "/patient/appointments", label: "Appointments" },
  { href: "/patient/prescriptions", label: "Prescriptions" },
  { href: "/patient/labs", label: "Labs" },
  { href: "/patient/billing", label: "Billing" },
];

export default function PatientHeader() {
  return (
    <header className="border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <span className="text-lg font-semibold">myCare</span>

        <nav className="hidden md:flex gap-6 text-sm">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button variant="outline" size="sm">
          Logout
        </Button>
      </div>
    </header>
  );
}
