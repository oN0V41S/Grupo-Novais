import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, } from "@heroui/navbar";
import { Button } from "@heroui/button";
import Link from "next/link"

const Header: React.FC = () => {
  const dataNavItems = [
    { label:'Products', href: '/products'}
  ];

  return (
    <Navbar classNames={{
      base: "py-2 px-4 bg-black flex w-[90vw] mx-auto mt-[4vh] rounded-lg",
    }}>
      <NavbarBrand className="text-sm w-auto h-auto">
        <Link 
          href={'/'} 
          className='font-bold text-white my-auto' 
          prefetch={true}>Grupo Novais</Link>
      </NavbarBrand>
      <NavbarContent className="flex gap-2 gap-4 my-auto" justify="center">
        {dataNavItems.map((item)=>{return(
        <NavbarItem key={item.label}>
        <Link key={item.label} href={item.href} className='text-wihte' prefetch={true}>
          {item.label}
        </Link>
      </NavbarItem>
        )})}
      </NavbarContent>
      <NavbarContent justify="end" className='hidden'>
        <NavbarItem className="lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;