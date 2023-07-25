import logoImage from '@/assets/logo.png'
import profileImage from '@/assets/profile.png'

import Image from 'next/image'
import Link from 'next/link'
import { SquaresFour } from 'phosphor-react'

export function Header() {
  return (
    <header className="py-8 border-b border-gray-300">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <Image src={logoImage} alt="" />
        </Link>

        <div className="flex items-center space-x-10">
          <SquaresFour weight="fill" size={28} className="text-gray-700" />

          <Image src={profileImage} alt="" className="rounded-full w-10 h-10" />
        </div>
      </div>
    </header>
  )
}
