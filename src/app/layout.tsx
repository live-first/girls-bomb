import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ワンダーウィード 天',
  description: 'アイドルグループ「ワンダーウィード 天」の公式サイトです。',
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
