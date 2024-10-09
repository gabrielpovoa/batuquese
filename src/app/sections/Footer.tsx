import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    let year = new Date().getFullYear();
  
  return (
    <div className='mt-12'>
        <Link href="https://joao-povoa-filho.vercel.app/" target='_blank' className='text-center text-xs text-gray-400'>Produced By João Gabrield de Lima Póvoa<sup>&#169;</sup> - { year }</Link>
    </div>
  )
}
