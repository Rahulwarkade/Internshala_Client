import './globals.scss'
import Wraper from '@/Wraper/Wraper.js'

export const metadata = {
  title : "Jobs24.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Wraper>{children}</Wraper>
      </body>
    </html>
  )
}
