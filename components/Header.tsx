import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-1">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src="/public/images/EHA Clinics.png"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
        <h1>Living Healthy</h1>
      </div>
      <div>
        <Link
          href="/"
          className="px-4 py-2 text-sm md:text-base bg-blue-800 text-[#ebedf0] 
          flex items-center rounded-full text-center"
        >
          {' '}
          Sign up
        </Link>
      </div>
    </header>
  );
}

export default Header