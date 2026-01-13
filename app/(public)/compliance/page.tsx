"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const complianceTopics = [
  "HIPAA Compliance",
  "Data Protection Policies",
  "Audit & Reporting",
  "User Privacy Guidelines",
]

export default function CompliancePage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Compliance</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {complianceTopics.map((topic, i) => (
          <motion.div
            key={topic}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Learn how we meet strict regulations and ensure safe hospital operations.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
