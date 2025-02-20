import strings from '@/constants/strings';
import Link from 'next/link';
import React from 'react';

type Props = {
    children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  return (
    <main 
        className='
            relative flex flex-col items-center justify-center min-h-screen max-w-screen overflow-x-hidden p-4
            bg-gradient-to-tl from-fuchsia-50 via-blue-50 to-green-50 gap-12
        '
    >
        { children }
    </main>
  )
}

export default AuthLayout