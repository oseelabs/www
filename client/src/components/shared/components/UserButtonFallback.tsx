import React from 'react';
import { UserIcon } from 'lucide-react';

const UserButtonFallback = () => {
  return (
    <span
        className='
            flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-300 to-blue-300 border-2 border-white
        '
    >
        <UserIcon className='w-6 h-6' />
    </span>
  )
}

export default UserButtonFallback