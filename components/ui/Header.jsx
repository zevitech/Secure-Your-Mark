"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import { BiChevronDown } from "react-icons/bi";
import { navItems, navItemsMobile } from "@/constant/navItems";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { MdCopyright } from "react-icons/md";
import { RiAmazonLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FcTrademark } from "react-icons/fc";

export default function App() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const icons = {
    trademark: (
      <FcTrademark className="text-[30px] text-color-primary absolute top-[14px] left-[12px]" />
    ),
    copyright: (
      <MdCopyright className="text-[30px] text-blue-700 absolute top-[14px] left-[12px]" />
    ),
    amazon: (
      <RiAmazonLine className="text-[30px] text-yellow-500 absolute top-[14px] left-[12px]" />
    ),
    business: (
      <IoBriefcaseOutline className="text-[25px] text-purple-700 absolute top-[14px] left-[12px]" />
    ),
  };

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={"py-2 px-10"}
      maxWidth={"2xl"}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo width={90} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="start" className="max-sm:hidden">
        <NavbarBrand>
          <Logo width={90} />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {navItems.map((item) => (
          <React.Fragment key={item.id}>
            {item.subItems ? (
              <Dropdown>
                <NavbarItem>
                  <DropdownTrigger>
                    <Button
                      disableRipple
                      className="p-0 bg-transparent data-[hover=true]:bg-transparent text-slate-700 font-medium text-medium hover:opacity-75"
                      endContent={<BiChevronDown />}
                      radius="sm"
                      variant="light"
                    >
                      {item.text}
                    </Button>
                  </DropdownTrigger>
                </NavbarItem>
                <DropdownMenu
                  aria-label="services"
                  className="w-[340px]"
                  itemClasses={{
                    base: "gap-4",
                  }}
                >
                  {item?.subItems?.map((subItem, index) => (
                    <DropdownItem
                      key={index}
                      description={subItem.details}
                      startContent={icons[subItem.icon]}
                      className="relative pt-8 pl-14"
                    >
                      <Link
                        className="absolute top-[8px] font-medium h-full text-slate-600"
                        href={`${subItem.route}`}
                      >
                        {subItem.text}
                      </Link>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem isActive={pathname == item.route} className="px-2">
                <Link
                  className={`text-slate-700 font-medium text-medium hover:opacity-75 ${
                    pathname == item.route && `text-color-primary`
                  }`}
                  href={`${item.route}`}
                >
                  {item.text}
                </Link>
              </NavbarItem>
            )}
          </React.Fragment>
        ))}
        <NavbarItem className="px-2">
          <Button
            as={Link}
            color="primary"
            href="/trademark-register"
            variant="ghost"
            onClick={() => setIsLoading(true)}
            isLoading={isLoading}
          >
            Trademark Now
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-8">
        {navItemsMobile.map((item) => (
          <NavbarMenuItem key={item.id}>
            <Link
              className="w-full"
              href={item.route}
              size="lg"
              color="foreground"
            >
              {item.text}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
