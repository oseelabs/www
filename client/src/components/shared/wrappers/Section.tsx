import React from 'react';

type SectionProps = {
    children: React.ReactNode;
    className?: string;
}

const Section = ( { children, className }: SectionProps ) => {
  return (
    <section
      className={`flex items-center justify-center p-2 ${className}`}
    >
        { children }
    </section>
  )
}

export default Section