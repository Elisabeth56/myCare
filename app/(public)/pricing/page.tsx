"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const pricingPlans = [
  { title: "Basic", price: "$49/mo", description: "Manage small clinics efficiently." },
  { title: "Pro", price: "$99/mo", description: "Advanced features for growing hospitals." },
  { title: "Enterprise", price: "Contact Us", description: "Custom solutions for large hospitals." },
]

export default function PricingPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {pricingPlans.map((plan, i) => (
          <motion.div
            key={plan.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle>{plan.title}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-semibold mb-4">{plan.price}</p>
                <Button variant="default" size="sm">Choose Plan</Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
