import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Archivo Vidal — Historia argentina sin filtros',
  description: 'Lo que los libros prefirieron omitir. Por Ernesto Vidal.',
  openGraph: {
    title: 'Archivo Vidal',
    description: 'Historia argentina sin filtros. Lo que los manuales prefirieron omitir.',
    type: 'website',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
