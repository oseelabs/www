import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import MainHeader from '@/components/shared/views/Header';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <ClerkProvider>
      <html lang="en" className='max-w-screen overflow-x-hidden'>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
          <link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Gochi+Hand&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Righteous&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
        </head>
        <body className='max-w-screen overflow-x-hidden font-poppins'>
          <header className='relative flex flex-row items-center m-auto justify-between max-w-screen w-full overflow-x-hidden p-2'>
              <MainHeader />
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
