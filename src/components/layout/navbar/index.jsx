
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
  const [isDrawerOpen,setIsDrawerOpen]=useState(false)
  const pathName = usePathname();
  const navList = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Clients", href: "/clients" },
    { name: "Career", href: "/career" },
  ];
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className=' w-full z-10 bg-white'>
      <nav className="py-3 flex container mx-auto justify-between items-center">
        <div className='flex items-center gap-2'>
          {/* Drawer Toggle Button for Small Devices */}
          <button onClick={toggleDrawer} className='lg:hidden md:hidden text-xl'>
          </button>
          <img className='h-14 w-14 ml-4' src="/logo.png" alt="Logo" />
        </div>
        <div className="hidden md:flex gap-10">
          {navList.map((item, index) => (
            <Link
              href={item?.href}
              className={`text-sm leading-7 font-normal relative hover:border-none after:absolute after:w-0 after:h-[5px] after:bottom-0 after:bg-primary after:transition-all after:duration-200 after:ease-in-out after:rounded-full hover:after:w-full hover:after:left-0 ${pathName === item?.href
                ? "after:w-full after:left-0"
                : "after:left-1/2"
                }`}
              key={index}
            >
              <button className="nav_link pb-2 leading-5 capitalize">
                {item?.name}
              </button>
            </Link>
          ))}
        </div>
       
      </nav>
    </div>
  );
};

export default Navbar;