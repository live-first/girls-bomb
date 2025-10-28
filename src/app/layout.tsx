import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ワンダーウィード 天',
  description: 'アイドルグループ「ワンダーウィード 天」の公式サイトです。',
  openGraph: {
    title: 'ワンダーウィード 天',
    description: 'アイドルグループ「ワンダーウィード 天」の公式サイトです。',
    url: 'https://wonder-weed.com',
    siteName: 'ワンダーウィード 天',
    images: [
      {
        url: '/ワンダーウィード天.jpg',
        width: 1200,
        height: 630,
        alt: 'ワンダーウィード 天',
      },
    ],
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ワンダーウィード 天',
    description: 'アイドルグループ「ワンダーウィード 天」の公式サイトです。',
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
      <body>{children}</body>
    </html>
  )
}
