
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>Mario Trerotola</title> {/* Page title */}
        <meta name="description" content="Progetto soluzioni basate su IA per rivoluzionare i settori e aprire nuove opportunità." /> {/* Meta description */}
      </Head>
      <body>{children}</body>
    </html>
  )
}
