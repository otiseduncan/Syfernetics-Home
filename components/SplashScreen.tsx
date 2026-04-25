'use client'

import { useEffect, useState } from 'react'
import MatrixRain from './MatrixRain'
import Header from './Header'

export default function SplashScreen({ children }: { children: React.ReactNode }) {
  const [fadeRain, setFadeRain] = useState(false)

  useEffect(() => {
    // Start fading the rain after 3 seconds
    const timer = setTimeout(() => setFadeRain(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Site content always visible (Hero particles start immediately) */}
      <Header />
      <main className="pt-20">
        {children}
      </main>

      {/* Matrix rain overlay - fades out smoothly */}
      <MatrixRain fade={fadeRain} />
    </>
  )
}