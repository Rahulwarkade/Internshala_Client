"use client"
import './globals.scss'
import Wraper from '@/Wraper/Wraper.js'
import 'remixicon/fonts/remixicon.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wraper>{children}</Wraper>
      </body>
    </html>
  )
}
