import React from 'react'
import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import InstagramIcon from '../../../public/Instagram-icon.svg'
import FacebookIcon from '../../../public/Facebook-icon.svg'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white'>
      <div className='container p-12 flex justify-between'>
        <span>Rajat Kumar</span>
        <p className='text-slate-600'>All rights reserved.</p>

        <div className='socials flex flex-row gap-2'>
          <Link href='https://github.com/rajat7014'>
            <Image src={GithubIcon} alt='Github Icon' />
          </Link>
          <Link href='https://linkedin.com/in/rajat-kumar-a51987267/'>
            <Image src={LinkedinIcon} alt='Linkedin Icon' />
          </Link>
          <Link
            className='bg-white p-3 rounded-full'
            href='https://instagram.com/rajat_ydv980'
          >
            <Image src={InstagramIcon} alt='Instagram Icon' />
          </Link>
          <Link
            className='bg-white p-3 rounded-full'
            href='https://facebook.com/profile.php?id=100023601781789'
          >
            <Image src={FacebookIcon} alt='Facebook Icon' />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
