"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminBillingPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">No billing data</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Invoices, payments, and financial reports will appear here.
        </CardContent>
      </Card>
    </motion.section>
  );
}
