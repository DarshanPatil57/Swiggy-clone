import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { IoIosHelpBuoy } from "react-icons/io";
export default function Header() {
    const [toggle, setToggle] = useState(false);


    const links = [
        {
            icon:<CiSearch/>,
            name:"Search"
        },
        {
            icon:<CiDiscount1/>,
            name:"Offers",
            sup:"New"
        },
        {
            icon:<IoIosHelpBuoy/>,
            name:"Help"
        },
        {
            icon:<IoPersonOutline/>,
            name:"Sign In"
        },
        {
            icon:<FaShoppingCart/>,
            name:"Cart"
        }
    ]
    return (
        <>
            {toggle && (
                <div
                    className='black-overlay w-full h-full fixed top-0 left-0 z-50 opacity-50 duration-1000'
                    onClick={() => setToggle(false)} 
                    style={{ opacity: 1, visibility: 'visible' }}
                >
                    <div onClick={(e) => e.stopPropagation()}
                        className='w-[500px] bg-white shadow-lg h-full absolute duration-[600ms]'
                        style={{
                            transform: toggle ? 'translateX(0)' : 'translateX(-100%)',
                        }}
                    >
                    </div>
                </div>
            )}

            <header className='p-1 shadow-xl relative'>
                <div className='max-w-[1200px] mx-auto flex items-center'>
                    <div className='w-24 mx-5'>
                        <img
                            src="https://imgs.search.brave.com/Y1pewJmsFhtBAenD5l6T57mUCTfxr0s9ljw64Xo7L4w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZWVr/dmVjdG9ycy5jb20v/c3RvcmFnZS9pbWFn/ZXMvU3dpZ2d5LTAx/LnN2Zw"
                            className='w-full cursor-pointer'
                            alt="Logo"
                        />
                    </div>
                    <div className='flex items-center gap-3'>
                        <h1>
                            <span className='font-bold text-[#fc8019] border-b-[2px] border-black'>
                                Surat
                            </span>
                            , Gujarat, India
                        </h1>
                        <RxCaretDown
                            className='text-[1.5rem] font-bold cursor-pointer text-[#fc8019]'
                            onClick={() => setToggle(!toggle)}
                        />
                    </div>
                    <nav className='flex list-none gap-10 ml-auto font-semibold '>
                    {
                        links.map((link,index) => 
                          <li className='flex items-center gap-4 hover:text-[#fc8019] cursor-pointer' key={index}>
                            {link.icon}
                            {link.name}
                            <sup className='font-bold text-[#fc8019]'>{link.sup}</sup>
                        </li>)
                    }
                    </nav>
                </div>
            </header>
        </>
    );
}
