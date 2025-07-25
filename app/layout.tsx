import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eco-Fleet Ghana | Electric Vehicle Fleet Leasing for Corporates & Government',
  description:
    'Eco-Fleet Ghana provides sustainable, cost-efficient electric vehicle (EV) fleet solutions for corporate, government, and industrial clients. Enjoy up to 70% fuel savings, zero emissions, and seamless charging infrastructure. Transform your fleet today.',
  keywords: [
    'Eco-Fleet Ghana',
    'Electric Vehicles Ghana',
    'EV Fleet Ghana',
    'EV leasing',
    'Electric vehicle leasing Ghana',
    'Corporate EV',
    'Government EV Ghana',
    'Sustainable mobility Ghana',
    'Fleet electrification',
    'EV for logistics',
    'Electric bus Ghana',
    'EV pickup Ghana',
    'Dongfeng Z9 GE',
    'K7M ER Bus',
    'Lynk & Co 900',
    'BYD Qin L',
  ],
  metadataBase: new URL('https://www.ecofleet.africa'),
  alternates: {
    canonical: 'https://www.ecofleet.africa',
  },
  openGraph: {
    title: 'Eco-Fleet Ghana | Sustainable Electric Vehicle Fleets',
    description:
      "Drive Ghana's energy future with Eco-Fleet's electric mobility solutions. Achieve 70% savings, zero emissions, and reliable EV fleet performance.",
    url: 'https://www.ecofleet.africa',
    siteName: 'Eco-Fleet Ghana',
    images: [
      {
        url: 'https://www.ecofleet.africa/assets/byd-qin-l-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'Eco-Fleet Electric Vehicles',
      },
    ],
    type: 'website',
    locale: 'en_GH',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco-Fleet Ghana | EV Fleet Leasing for Corporate Clients',
    description:
      'Empowering Ghana’s green future with cost-efficient EV fleets for logistics, government, and corporate use. Cut fuel costs, reduce emissions.',
    images: ['https://www.ecofleet.africa/assets/ev-thumbnail.jpg'],
    creator: '@ecofleetghana',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className=' bg-gradient-to-br from-gray-950 to-black'>{children}</body>
    </html>
  )
}
