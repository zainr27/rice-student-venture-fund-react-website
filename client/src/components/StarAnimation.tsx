import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

interface Star {
  id: number
  x: number
  y: number
  size: number
  speed: number
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.5 + 0.2
  }))
}

export default function StarAnimation() {
  const stars = useRef<Star[]>(generateStars(50))
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      stars.current = stars.current.map(star => ({
        ...star,
        x: (star.x + (x - 50) * star.speed * 0.01) % 100,
        y: (star.y + (y - 50) * star.speed * 0.01) % 100
      }))
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 bg-blue-950 overflow-hidden">
      {stars.current.map((star) => (
        <motion.div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  )
} 