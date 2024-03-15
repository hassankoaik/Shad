
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import bgimage from "../assets/folder.png"
import nwimage from "../assets/layout.png"
import { UserAvatar } from './UserAvatar'
import { ThemeToggler } from './ThemeToggler'
export default function Header() {
  return (
   <header className='flex items-center justify-between'>
    <Link href="/" className='flex items-center space-x-2 '>
        <div className='bg-grey w-fit'>
        <Image src={nwimage} alt='logo' height={70} width={60} className=' p-2 dark:bg-white rounded-b-md'/>
        </div>
        <h1 className='font-bold text-xl'>Dropbox</h1>

    </Link>
    <div className='px-5 flex space-x-2 items-center'>
        <ThemeToggler/>
        <UserAvatar/>
    </div>
   </header>
  )
}
