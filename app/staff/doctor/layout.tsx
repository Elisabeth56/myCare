
import { ReactNode } from "react";
import DoctorHeader from "@/components/staff/doctor-header";
import DoctorFooter from "@/components/staff/doctor-footer";

export default function DoctorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <DoctorHeader />
      <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      <DoctorFooter />
    </div>
  );
}