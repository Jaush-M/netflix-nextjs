import { BellIcon, SearchIcon } from '@heroicons/react/solid'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import BasicMenu from './basicMenu'

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolling, setIsScrolling] = useState(false)
  const { logout } = useAuth()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolling ? 'bg-[#141414]' : ''}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Link href="/">
          <a className="flex cursor-pointer">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
              height={27.02}
              width={100}
              objectFit="contain"
            />
          </a>
        </Link>

        <BasicMenu />
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink active">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="text-light flex items-center space-x-4 text-sm">
        <SearchIcon className="hidden h-6 w-6 sm:inline" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <div className="flex cursor-pointer">
            <Image
              src="https://rb.gy/g1pwyx"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header
