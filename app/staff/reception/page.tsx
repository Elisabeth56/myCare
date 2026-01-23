"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ReceptionDashboardPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold tracking-tight">
        Reception Dashboard
      </h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Patient Registration</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Register new and returning patients.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Appointments</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Manage bookings and schedules.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Queue</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Track patient waiting order.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Insurance</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Verify insurance and coverage.
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
