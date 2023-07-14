import './globals.css'



export const metadata = {
  title: 'Austen Dyer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
