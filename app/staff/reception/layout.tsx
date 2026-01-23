import { ReactNode } from "react";
import ReceptionHeader from "@/components/staff/reception-header";
import ReceptionFooter from "@/components/staff/reception-footer";

export default function ReceptionLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <ReceptionHeader />
      <main className="flex-1 px-4 py-6 md:px-8">{children}</main>
      <ReceptionFooter />
    </div>
  );
}
