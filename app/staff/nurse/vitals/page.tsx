"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NurseVitalsPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold tracking-tight">
        Patient Vitals
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">No vitals recorded</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Vital signs such as blood pressure, temperature, pulse, and oxygen
          levels will appear here once recorded.
        </CardContent>
      </Card>
    </motion.section>
  );
}
