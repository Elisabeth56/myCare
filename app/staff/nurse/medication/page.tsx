"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NurseMedicationPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      <h1 className="text-2xl font-semibold tracking-tight">
        Medication Administration
      </h1>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">No medication records</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Administered medications, dosages, and timestamps will be listed here
          once patient treatment begins.
        </CardContent>
      </Card>
    </motion.section>
  );
}
