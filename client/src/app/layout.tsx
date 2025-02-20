import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en" className='max-w-screen overflow-x-hidden'>
        <body className='max-w-screen overflow-x-hidden'>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
