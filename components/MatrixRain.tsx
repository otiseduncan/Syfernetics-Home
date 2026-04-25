'use client'

import { useEffect, useRef, useState } from 'react'

export default function MatrixRain({ fade }: { fade: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    const letters =
      'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヰヱヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const fontSize = 16
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = new Array(columns).fill(1)

    function draw() {
      if (!canvas || !ctx) return
      
      // translucent black for trails
      ctx.fillStyle = 'rgba(11, 15, 20, 0.15)' // Match site background
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#29d3a0' // Syfernetics accent color
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length))
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 40)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Handle fade
  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => setVisible(false), 3000) // hide after 3 seconds of smooth fading
      return () => clearTimeout(timer)
    }
  }, [fade])

  if (!visible) return null

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full z-[60] transition-opacity duration-[3000ms] ${
        fade ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ backgroundColor: '#0b0f14' }} // Match site background initially
    />
  )
}