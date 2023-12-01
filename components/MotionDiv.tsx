"use client"
import React from 'react'
import { motion } from 'framer-motion'
const MotionDiv = (
    { children }: { children: React.ReactNode }
) => {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 20,
                duration: 1
            }}
            viewport={{ amount: 0, margin: "0" }}
        > {children}</ motion.div>
    )
}

export default MotionDiv