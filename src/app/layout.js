import './globals.css'

export const metadata = {
  title: 'ATC | Arab Trading Company',
  description: 'ATC',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
