import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - Codium',
  description: 'Get in touch with Codium. We\'d love to hear about your project.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
