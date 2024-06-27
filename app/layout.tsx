import { Inter } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'


const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
