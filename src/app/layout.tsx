import './globals.css'
import { Josefin_Sans } from 'next/font/google'

const Josefin_sans = Josefin_Sans({ 
  subsets: ["latin"], 
  variable: "--font-josefin-sans",
  weight: "500"  })

export const metadata = {
  title: 'Login',
  description: 'Login for Logistic and Transport',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={Josefin_sans.className}>{children}</body>
    </html>
  )
}
