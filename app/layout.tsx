import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Casa a 50 metros del mar en San Antonio del Mar | $7,500,000 MXN — Bienes Raíces Hub',
  description:
    'Casa de 3 recámaras y 2.5 baños a 50 metros del mar, en una calle privada con solo dos casas, entre Tijuana y Rosarito. Seguridad 24/7 y acceso directo a la carretera de cuota. Agenda tu visita con el asesor.',
  openGraph: {
    title: 'Casa a 50 metros del mar en San Antonio del Mar | $7,500,000 MXN',
    description:
      'Casa de 3 recámaras y 2.5 baños a 50 metros del mar, en una calle privada con solo dos casas, entre Tijuana y Rosarito. Seguridad 24/7 y acceso directo a la carretera de cuota.',
    type: 'website',
    locale: 'es_MX',
    siteName: 'Bienes Raíces Hub',
    images: [
      {
        url: '/images/fachada.jpg',
        width: 900,
        height: 1200,
        alt: 'Fachada de la residencia en San Antonio del Mar, a 50 metros del mar',
      },
    ],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
        <script
          src="https://isis-vercel.vercel.app/isis-widget.js"
          data-api="https://isis-vercel.vercel.app"
          data-avatar="https://isis-vercel.vercel.app/isis-avatar.webp"
          data-brand="BienesRaícesHub"
          data-whatsapp="5216641200764"
          data-property="san-antonio-del-mar-50m"
          data-catalog-url="https://www.bienesraiceshub.com/isis-catalog"
          data-catalog-json="https://www.bienesraiceshub.com/isis-catalog-json"
          data-alma-url="https://preaprueba.com"
          data-emailjs-service="service_pz5aqzz"
          data-emailjs-template="template_kyt29ma"
          data-emailjs-key="wSSGo0XmY23CNICP4"
          defer
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
