import './globals.css'
import { Poppins, Lato } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
})

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
})

export const metadata = {
  title: 'Trisha Lalit - Data Scientist | Software Engineer | AI Enthusiast',
  description: 'Portfolio of Trisha Lalit, showcasing skills in data science, software engineering, and AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${lato.variable}`}>
      <body className="bg-background text-text font-body">{children}</body>
    </html>
  )
}

