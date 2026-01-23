"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminSchedulesPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold tracking-tight">Schedules</h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">No schedules set</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Staff and department schedules will be managed here.
        </CardContent>
      </Card>
    </motion.section>
  );
}
