import type { ReactNode } from "react";
import AdminHeader from "@/components/admin/admin-header";
import AdminFooter from "@/components/admin/admin-footer";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <AdminFooter />
    </div>
  );
}
