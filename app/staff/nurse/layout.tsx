import { ReactNode } from "react";
import NurseHeader from "@/components/staff/nurse-header";
import NurseFooter from "@/components/staff/nurse-footer";

export default function NurseLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <NurseHeader />
      <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      <NurseFooter />
    </div>
  );
}
