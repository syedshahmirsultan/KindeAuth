import React from 'react';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const AuthComp = async() => {
    const {getUser} = getKindeServerSession();
    const user = await getUser()
    return (
        <div className='flex h-full justify-center  items-center'>
            {
             user ? (
                <LogoutLink className='px-5 py-2.5 bg-white hover:bg-gray-100/90 text-blue-700 text-md rounded-md font-semibold'>Log out</LogoutLink>

             ) : (
                <div className='flex gap-x-3 md:gap-x-6'>
                <LoginLink className='px-5 py-2.5 bg-white hover:bg-gray-100/90 text-blue-700 text-md rounded-md font-semibold'>Sign in</LoginLink>
                    <RegisterLink className='px-5 py-2.5 bg-white hover:bg-gray-100/90 text-blue-700 text-md rounded-md font-semibold'>Sign up</RegisterLink>
                </div>
             )
            }
        </div>
    );
}

export default AuthComp;
