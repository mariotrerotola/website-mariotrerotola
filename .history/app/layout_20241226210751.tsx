import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta name="description" content="A brief description of my website" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}