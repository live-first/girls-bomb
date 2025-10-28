import type { Metadata } from 'next'
import './globals.css'
import Head from 'next/head'
import top from '@/image/ワンダーウィード天.jpg'

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
    <>
      <Head>
        <meta property='og:image' content={top.src} />
      </Head>
      <html>
        <body>{children}</body>
      </html>
    </>
  )
}
