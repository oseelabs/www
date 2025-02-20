import React from 'react';

type Props = {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <React.Fragment>
        <header className='max-w-screen overflow-x-hidden p-2'>
            <h1>Header</h1>
        </header>
        <main className='max-w-screen overflow-x-hidden p-2'>
            { children }
        </main>
        <footer className='max-w-screen overflow-x-hidden p-2'>
            <p>Footer</p>
        </footer>
    </React.Fragment>
  )
}

export default MainLayout