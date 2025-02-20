import strings from '@/constants/strings';
import { Section } from '@/components/shared/wrappers';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <Section
      className="
      flex font-poppins min-h-80 bg-gradient-to-br from-teal-100 via-indigo-100 to-pink-100
      "
    >
      <div className="hero-body">
        <div
            className="
                flex flex-col text-center text-balance items-center justify-center
                w-full place-items-center justify-items-center
            "
        >
            <h1 
                className="
                    flex flex-row flex-wrap w-fit text-4xl text-transparent bg-clip-text text-center text-balance border-2 pb-2
                    bg-gradient-to-r from-teal-700 via-indigo-700 to-pink-700
                "
            >
                <span>
                    Welcome to the <strong>&nbsp;{strings.app_name}&nbsp;</strong> starter
                </span>
            </h1>
            <h2 className="subtitle">
                {strings.app_description}
            </h2>
        </div>
        <div
            className="
                flex items-center justify-center
                w-full
            "
        >
            <Button 
                asChild
                className='
                    flex rounded-full bg-gradient-to-r from-fuchsia-300 to-blue-300
                    w-fit p-3 mt-4
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
        </div>
      </div>
    </Section>
  )
}

export default HeroSection;