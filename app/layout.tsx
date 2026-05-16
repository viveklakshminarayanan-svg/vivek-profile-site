import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Vivek Lakshminarayanan — Digital Product Leader',
  description:
    'Analytical Mind. Strategic Thinker. Purpose Driven. Digital product leader specialising in enterprise data platforms, analytics governance, and AI enablement.',
  openGraph: {
    title: 'Vivek Lakshminarayanan — Digital Product Leader',
    description:
      'Building analytics-driven digital products that create real business impact.',
    url: 'https://vivek-profile-site.vercel.app',
    siteName: 'Vivek Lakshminarayanan',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}

