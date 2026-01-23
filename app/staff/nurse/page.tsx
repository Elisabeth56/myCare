"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NurseDashboardPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold tracking-tight">
        Nurse Dashboard
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Vitals</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Record and monitor patient vital signs.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Medication</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Track administered medications and schedules.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Status</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Update patient care status and observations.
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
