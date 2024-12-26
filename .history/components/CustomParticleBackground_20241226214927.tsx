"use client"

import React, { useRef, useEffect, useState } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

const CustomParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationFrameRef = useRef<number | null>(null);
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')

      if (ctx) {
        canvas.width = dimensions.width
        canvas.height = dimensions.height

        const particleCount = 100
        particlesRef.current = Array.from({ length: particleCount }, () => ({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 1,
        }))

        const animate = () => {
          ctx.clearRect(0, 0, dimensions.width, dimensions.height)

          particlesRef.current.forEach((particle, i) => {
            particle.x += particle.vx
            particle.y += particle.vy

            if (particle.x < 0 || particle.x > dimensions.width) particle.vx *= -1
            if (particle.y < 0 || particle.y > dimensions.height) particle.vy *= -1

            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
            ctx.fill()

            // Draw connections
            for (let j = i + 1; j < particlesRef.current.length; j++) {
              const otherParticle = particlesRef.current[j]
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 100) {
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`
                ctx.stroke()
              }
            }

            // React to mouse
            const dx = mousePosition.x - particle.x
            const dy = mousePosition.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              particle.x -= dx * 0.02
              particle.y -= dy * 0.02
            }
          })

          animationFrameRef.current = requestAnimationFrame(animate)
        }

        animate()
      }
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [dimensions, mousePosition])

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0"
      onMouseMove={handleMouseMove}
    />
  )
}

export default CustomParticleBackground

