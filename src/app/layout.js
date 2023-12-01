import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { NoteProvider } from "@/components/Provider/NoteProvider";
import { NoteLayout } from "@/components/noteeditor/NoteLayout"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Serasa Note',
  description: 'Thoughtful Note Taking App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NoteProvider><NoteLayout>{children}</NoteLayout></NoteProvider>
        </body>
    </html>
  )
}
