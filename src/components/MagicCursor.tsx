"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-orange-500 mix-blend-difference pointer-events-none z-50 hidden lg:block"
      animate={{ x: mousePosition.x - 12, y: mousePosition.y - 12 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}