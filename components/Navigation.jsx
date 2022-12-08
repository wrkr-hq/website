import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import WRKR from '../public/WRKR.svg'
import styles from '../styles/Navigation.module.css'

const Navigation = () => {
    
    const [isActive, setIsActive] = React.useState(false)
    const [nav, setNav] = React.useState(false)

    //toggle menu
    const handleMenu = (e) => {
        e.preventDefault();

        setIsActive(!isActive)
    }

    if(typeof window !== 'undefined') {
        const fixNavigation = () => {
            if(window.scrollY >= 80) {
                setNav(true)
            } else {
                setNav(false)
            }
        }

        window.addEventListener('scroll', fixNavigation)
    }
    
  return (
        <div className='bg-[#02000B] w-full'>
            <nav className={
                nav 
                ? 
                    `${styles.nav} 
                    ${styles.active}
                    ${styles.fixedTop} 
                    top-0  
                    mx-auto w-full
                    flex flex-col lg:flex-row items-center 
                    text-white justify-between 
                    lg:px-20 py-8`
                :
                    `${styles.nav} 
                    ${styles.fixedTop} 
                    top-0  
                    mx-auto w-full 
                    flex flex-col lg:flex-row items-center 
                    text-white justify-between 
                    lg:px-20 py-8`}>
                
                <div className='flex max-w-[1440px] mx-auto justify-between w-full items-center px-10 lg:px-0'>

                    <div>
                        <Image  src={WRKR} alt='/'/>
                    </div>
                    <div className='hidden lg:block lg:space-x-4 lg:justify-between '>
                        <Link href='/'>
                            Products
                        </Link>
                        <Link href='/'>
                            Usecases
                        </Link>
                        <Link href='/'>
                            Developers
                        </Link>
                        <Link href='/'>
                            Company
                        </Link>
                    </div>
                    <div>
                        <button className='hidden lg:block border-[1px] rounded-md lg:px-[75px] lg:py-[15px] font-medium text-[#BFDCFF] border-[#BFDCFF]'>
                            Schedule Demo
                        </button>

                        {/* mobile */}
                        <div className="flex justify-between 
                            items-center lg:hidden">
                            <Link
                                legacyBehavior
                            href="/"
                            className="outline-none mobile-menu-button"
                            >
                            <a onClick={handleMenu}>
                                <svg
                                className={`w-[3.5rem] h-[2.75rem] text-white  ${isActive ? '-rotate-45': 'rotate-0'}`}
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </a>
                            </Link>
                            {/* hover:text-blue-900 */}
                        </div>
                    </div>
                </div>
                {/* <!-- mobile menu --> */}
                {isActive && (
                        <div className="mt-6 bg-[#02000B] lg:hidden 
                            mobile-menu  w-full px-[32px]">
                        <ul className="bg-[#02000B] text-black">
                            <li className="p-4 text-white">
                            <Link
                                href="/"
                                className="block text-sm px-2 py-4 hover:bg-black hover:text-white transition duration-300"
                            >
                                Products
                            </Link>
                            </li>
                            <li className="p-4 text-white">
                                <Link
                                    href="/cart"
                                    className="block text-sm px-2 py-4 hover:bg-black transition hover:text-white duration-300"
                                >
                                    Usecases
                                </Link>
                            </li>

                            <li className="p-4 text-white">
                                <Link
                                    href="/cart"
                                    className="block text-sm px-2 py-4 hover:bg-black transition hover:text-white duration-300"
                                >
                                    Developers
                                </Link>
                            </li>

                            <li className="p-4 text-white">
                                <Link
                                    href="/cart"
                                    className="block text-sm px-2 py-4 hover:bg-black transition hover:text-white duration-300"
                                >
                                    Company
                                </Link>
                            </li>

                            <li className='p-4'>
                                <button className='border-[1px] rounded-md px-[75px] py-[15px] font-medium text-[#BFDCFF] border-[#BFDCFF]'>
                                Schedule Demo
                                </button>
                            </li>
                            
                            {/* /// */}
                        </ul>
                        </div>
                    )}
            </nav>
        </div>
  )
}

export default Navigation
