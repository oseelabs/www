import strings from '@/constants/strings';
import Link from 'next/link';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <span 
    className='
        relative flex flex-col items-center justify-center h-full max-h-screen min-h-[80%] max-w-screen overflow-x-hidden p-4
        bg-gradient-to-tl from-fuchsia-50 via-blue-50 to-green-50 gap-12
    '
    >
      <main 
          className='
              relative flex flex-col items-center justify-center  max-w-screen overflow-x-hidden p-4 bg-transparent
          '
      >
          { children }
      </main>
      <footer  
          className='
              relative flex flex-col items-center justify-center max-w-screen overflow-x-hidden p-4 bg-transparent
          '
      >
          {/* Just a placeholder to fill the screen appropriately */}
      </footer>
    </span>
  )
}

export default AuthLayout