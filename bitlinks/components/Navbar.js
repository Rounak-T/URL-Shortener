import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className='m-1 p-2 bg-white text-black flex justify-between text-center'>
        <div className='font-bold'>Bit-Links</div>
        <ul className='flex gap-6'>
            <Link href = "/"><li>Home</li></Link>
            <Link href = "/about-us"><li>About-Us</li></Link>
            <Link href = "/contact-us"><li>Contact-Us</li></Link>
            <li className='flex gap-2'>
                <Link href = "/shorten"><button className='rounded-lg bg-black text-white px-3 py-1'>Try Now</button></Link>
                <Link href = "/github"><button className='rounded-lg bg-black text-white px-3 py-1'>Github</button></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
 