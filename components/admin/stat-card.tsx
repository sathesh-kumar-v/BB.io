"use client"

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

interface StatCardProps {
  title: string
  value: string | number
  change?: string
  changeType?: "positive" | "negative" | "neutral"
  icon: LucideIcon
  index?: number
}

export function StatCard({ title, value, change, changeType = "neutral", icon: Icon, index = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="p-6 hover:shadow-lg hover:shadow-primary/5 transition-all border-border bg-card">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
            {change && (
              <p
                className={`text-sm mt-2 ${
                  changeType === "positive"
                    ? "text-green-400"
                    : changeType === "negative"
                      ? "text-red-400"
                      : "text-muted-foreground"
                }`}
              >
                {change}
              </p>
            )}
          </div>
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center border border-primary/20">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
