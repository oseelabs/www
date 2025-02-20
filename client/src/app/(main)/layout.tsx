import React from 'react';

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
        <main className='max-w-screen overflow-x-hidden'>
            { children }
        </main>
        <footer className='max-w-screen overflow-x-hidden'>
            <p>Footer</p>
        </footer>
    </React.Fragment>
  )
}

export default MainLayout