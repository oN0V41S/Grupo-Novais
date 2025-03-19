import React from 'react';
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";

interface HeaderProps {
  navItems: { label: string; href: string }[];
}

const Header: React.FC<HeaderProps> = ({navItems}) => {
  return (
    <Navbar classNames={{
      base: "py-2 px-4 bg-black flex w-[90vw] mx-auto mt-2 rounded-lg",
    }}>
      <NavbarBrand className="text-sm w-auto h-auto">
        <p className="font-bold text-inherit my-auto">Grupo Novais</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-2 gap-4 my-auto" justify="center">
        {navItems.map((item)=>{return(
        <NavbarItem>
        <Link key={item.label} color='foreground' href={item.href}>
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