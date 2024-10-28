"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Gradient() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY })
        }
        window.addEventListener('mousemove', updateMousePosition)
        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return (
        <motion.div
            className="fixed w-48 h-48 rounded-full opacity-70 blur-[100px] pointer-events-none"
            animate={{
                x: mousePosition.x - 128,
                y: mousePosition.y - 128,
                background: [
                    'radial-gradient(circle, rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5))',
                    'radial-gradient(circle, rgba(255,255,255,0.5), rgba(255,255,255,0.5), rgba(255,255,255,0.5))',
                ],
                scale: [1, 1.2, 1]
            }}
            transition={{
                x: { type: 'spring', damping: 10 },
                y: { type: 'spring', damping: 10 },
                background: { duration: 10, repeat: Infinity },
                scale: { duration: 2, repeat: Infinity },
            }}
        />
    )
}