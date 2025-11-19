"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"

interface AnimatedDropzoneTextProps {
  isHovering: boolean
  folderName: string
  hoverTitle: string
  hoverDescription: string
}

export function AnimatedDropzoneText({
  isHovering,
  folderName,
  hoverTitle,
  hoverDescription,
}: AnimatedDropzoneTextProps) {
  return (
    <div className="text-left overflow-hidden">
      <AnimatePresence mode="wait">
        {isHovering ? (
          <motion.div
            key="hover"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            <motion.p
              className="font-medium text-sm"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.04,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {hoverTitle}
            </motion.p>
            <motion.p
              className="text-muted-foreground text-xs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.25,
                delay: 0.08,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {hoverDescription}
            </motion.p>
          </motion.div>
        ) : (
          <motion.p
            key="idle"
            className="font-semibold text-base"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{
              duration: 0.25,
              ease: [0.4, 0, 0.2, 1],
            }}
          >
            {folderName}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  )
}
