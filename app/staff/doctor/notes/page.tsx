"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function DoctorNotesPage() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="space-y-6"
    >
      {/* Page header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-semibold tracking-tight">
          Clinical Notes
        </h1>
        <Button size="sm">
          <FileText className="mr-2 h-4 w-4" />
          New Note
        </Button>
      </div>

      {/* Placeholder state */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            No notes available
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          Clinical notes written by doctors will appear here once patient
          encounters begin. This section will support structured notes,
          timestamps, and patient references.
        </CardContent>
      </Card>
    </motion.section>
  );
}
