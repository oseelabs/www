import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

import strings from '@/constants/strings';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import { UserButtonFallback } from '@/components/shared/components';

const MainHeader = () => {
  return (
    <React.Fragment>
        <Link 
            href={'/'} 
            className='
                flex mr-auto items-center justify-center text-2xl font-bold text-black
                font-inter max-h-12 gap-2
            '
        >
            <Image
                src='/next.svg'
                alt='logo'
                width={80}
                height={30}
            />
            <span className='hidden sm:flex'>
                { strings.app_name }
            </span>
        </Link>
        <nav></nav>
        <div className='flex items-center justify-end ml-auto flex-row flex-1 w-full gap-2'>
            <SignedIn>
                <Button 
                    asChild
                    className='
                        flex rounded-full bg-gradient-to-r from-fuchsia-300 to-blue-300
                    '
                >
                    <Link 
                        href={'/get-started'}
                        className='flex items-center justify-center'
                    >
                        <span
                            className='flex items-center text-black'
                        >
                            Get started
                        </span>
                        <MoveRight />
                    </Link>
                </Button>
                <span className='flex items-center justify-center w-10 h-10 rounded-full'>
                    <UserButton 
                        appearance={{
                            elements: {
                              userButtonAvatarBox: "text-xl w-full h-full",
                            },
                        }} 
                        fallback={ <UserButtonFallback /> } 
                    />
                </span>
            </SignedIn>
            <SignedOut>
                <Button
                    asChild 
                    className='flex rounded-full bg-gradient-to-r from-fuchsia-300 to-blue-300'
                >
                    <SignInButton />
                </Button>
            </SignedOut>
        </div>
    </React.Fragment>
  )
}

export default MainHeader