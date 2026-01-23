"use client";

import { motion } from "framer-motion";

export default function AuthCallbackPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-2"
      >
        <p className="text-lg font-medium">Signing you in…</p>
        <p className="text-sm text-muted-foreground">
          Please wait while we complete authentication
        </p>
      </motion.div>
    </div>
  );
}
