import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS Landing Template',
  description: 'A beautiful, modern SaaS landing page template built with Next.js, TypeScript, and Tailwind CSS',
  keywords: ['SaaS', 'landing page', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  authors: [{ name: 'SaaS Template' }],
  openGraph: {
    title: 'SaaS Landing Template',
    description: 'A beautiful, modern SaaS landing page template',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
