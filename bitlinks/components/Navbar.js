import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className='m-1 p-2 bg-white text-black flex justify-between'>
        <div className='font-bold'>Bit-Links</div>
        <ul className='flex gap-8'>
            <Link href = "/"><li>Home</li></Link>
            <Link href = "/about-us"><li>About-Us</li></Link>
            <Link href = "/contact-us"><li>Contact-Us</li></Link>
            <Link href = "/shorten"><li>Shorten</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
