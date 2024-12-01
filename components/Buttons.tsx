'use client';

import {useSession, signIn, signOut} from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';

export function SignInButton() {
  const {data: session, status} = useSession();
  console.log(session, status);
  
  if(status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
    <Link href={'/dashboard'} className='flex gap-2 '>
            <Image src={session.user?.image ?? '/mememan.webp'} width={20} height={20} alt="That's you" />
            <SignOutButton></SignOutButton>
    </Link>)
  }

  return <button onClick={()=>signIn()}>SignIn</button>;
}

export function SignOutButton() {
  return <button onClick={()=> signOut()}>SignOut</button>;
}