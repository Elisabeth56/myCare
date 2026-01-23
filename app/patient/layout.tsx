import { ReactNode } from "react";
import PatientHeader from "@/components/patient/patient-header";
import PatientFooter from "@/components/patient/patient-footer";

export default function PatientLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <PatientHeader />
      <main className="flex-1 px-4 py-6 md:px-8">
        {children}
      </main>
      <PatientFooter />
    </div>
  );
}
