import type { Metadata } from 'next'
import './globals.css'
import Provider from './Provider'

export const metadata: Metadata = {
  title: 'Girls Bpmb!!',
  description: 'アイドルの対バンライブ「Girls Bomb!!」の公式サイトです。',
  metadataBase: new URL('https://girlsbomb.com'),
  openGraph: {
    title: 'Girls Bpmb!!',
    description: 'アイドルの対バンライブ「Girls Bomb!!」の公式サイトです。',
    url: 'https://girlsbomb.com',
    siteName: 'Girls Bpmb!!',
    images: [
      {
        url: '/ワンダーウィード天.jpg',
        width: 1200,
        height: 630,
        alt: 'Girls Bpmb!!',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Girls Bpmb!!',
    description: 'アイドルの対バンライブ「Girls Bomb!!」の公式サイトです。',
    images: ['/ワンダーウィード天.jpg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
