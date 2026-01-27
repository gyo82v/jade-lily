"use client"

import { usePathname } from "next/navigation";
import { Navlink } from "@/components/navbars/Navlink";
import { useAuth } from "@/firebase/authProvider";
import { HiMenu, HiOutlineLogout, HiX } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const { user, profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(false);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const prevBodyOverflow = useRef<string | null>(null);

  // Lock body scroll while open
  useEffect(() => {
    if (isOpen) {
      prevBodyOverflow.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else if (prevBodyOverflow.current !== null) {
      document.body.style.overflow = prevBodyOverflow.current;
      prevBodyOverflow.current = null;
    }
    return () => {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      }
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  // Backdrop click (mousedown to catch before focus changes)
  const onBackdropMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // if click is outside panel -> close
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  // Close when any link inside the panel is clicked.
  // This uses event delegation so you don't need to add onClick to Navlink.
  const onPanelClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // If an anchor (<a>) was clicked (or child of it), close the menu.
    // This covers Next.js Link -> <a> and normal <a> elements.
    if (target.closest("a")) {
      setIsOpen(false);
    }
  };

  const nav = `flex items-center`;
  const ul = `flex`;
  const desktopMenu = `hidden md:flex md:items-center`;
  // mobileMenu class variable no longer needed for absolute dropdown

  return (
    <nav className={nav}>
      {/* Desktop menu (unchanged) */}
      <div className={desktopMenu}>
        <ul className={ul}>
          <li>
            <Navlink href="/" isActive={pathname === "/"}>Home</Navlink>
          </li>
          <li>
            <Navlink href="/about" isActive={pathname.startsWith("/about")}>About</Navlink>
          </li>
          <li>
            <Navlink href="/menu" isActive={pathname.startsWith("/menu")}>Menu</Navlink>
          </li>
          {user ? (
            <>
              <li>
                <Navlink href="/account">{profile?.displayName}</Navlink>
              </li>
              <li>
                <Navlink href="/sign-out" className="inline-flex items-center justify-center h-full">
                  <HiOutlineLogout className="h-5 w-5" />
                </Navlink>
              </li>
            </>
          ) : (
            <li>
              <Navlink href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</Navlink>
            </li>
          )}
        </ul>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="mr-4 p-2"
          onClick={() => setIsOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <HiMenu className="h-7 w-7" />
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-50 flex"
            onMouseDown={onBackdropMouseDown}
            // aria-hidden is not strictly necessary here because role="dialog" is on the panel.
          >
            {/* backdrop */}
            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />

            {/* slide-over panel */}
            <div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              ref={panelRef}
              onClick={onPanelClick}
              className="ml-auto relative w-[80%] max-w-xs h-full bg-white shadow-2xl rounded-l-lg p-4 transform transition-transform duration-300 ease-out"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-semibold">Menu</div>
                <button
                  aria-label="Close menu"
                  className="p-2"
                  onClick={() => setIsOpen(false)}
                >
                  <HiX className="h-6 w-6" />
                </button>
              </div>

              <ul className="space-y-2">
                <li>
                  <Navlink href="/" isActive={pathname === "/"}>Home</Navlink>
                </li>
                <li>
                  <Navlink href="/about" isActive={pathname.startsWith("/about")}>About</Navlink>
                </li>
                <li>
                  <Navlink href="/menu" isActive={pathname.startsWith("/menu")}>Menu</Navlink>
                </li>

                {user ? (
                  <>
                    <li>
                      <Navlink href="/account">{profile?.displayName ?? "Account"}</Navlink>
                    </li>
                    <li>
                      <Navlink href="/sign-out" className="inline-flex items-center h-12">
                        <HiOutlineLogout className="h-5 w-5 mr-2" /> Sign out
                      </Navlink>
                    </li>
                  </>
                ) : (
                  <li>
                    <Navlink href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</Navlink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

















/*
"use client"

import { usePathname } from "next/navigation";
import {Navlink} from "@/components/navbars/Navlink"
import { useAuth } from "@/firebase/authProvider";
import { HiMenu } from "react-icons/hi";
import { HiOutlineLogout } from "react-icons/hi";
import { useState, useEffect } from "react";


export default function Navbar(){
    const {user, profile} = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    // eslint-disable-next-line react-hooks/set-state-in-effect
    useEffect(() => setIsOpen(false), [pathname])

    const nav = `flex items-center `
    const ul = `flex `
    const desktopMenu = `hidden md:flex md:items-center `
    const mobileMenu = `absolute right-20 top-20 bg-white shadow-md rounded-md mt-2`

    return(
        <nav className={nav}>
            <div className={desktopMenu}>
                <ul className={ul}>
                   <li>
                       <Navlink href="/" isActive={pathname === "/"}>Home</Navlink>
                   </li>
                   <li>
                       <Navlink href="/about" isActive={pathname.startsWith("/about")}>About</Navlink>
                   </li>
                   <li>
                       <Navlink href="/menu" isActive={pathname.startsWith("/menu")}>Menu</Navlink>
                   </li>
                   { user ? 
                   <>
                      <li>
                        <Navlink href="/account">{profile?.displayName}</Navlink>
                      </li>
                      <li>
                        <Navlink href="/sign-out" className="inline-flex items-center justify-center h-full"><HiOutlineLogout className="h-5 w-5" /></Navlink>
                      </li>
                   </>
                   :
                   <>
                     <li>
                        <Navlink href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</Navlink>
                     </li>
                   </>
                   }
                </ul>
            </div>
            <div className="md:hidden flex items-center">
              <button className="mr-4" onClick={() => setIsOpen(!isOpen)}>
                <HiMenu className="h-7 w-7" />
              </button>
              {
                isOpen && 
                  (
                  <div className={mobileMenu}>
                    <ul>
                        <li>
                            <Navlink href="/" isActive={pathname === "/"}>Home</Navlink>
                        </li>
                        <li>
                            <Navlink href="/about" isActive={pathname.startsWith("/about")}>About</Navlink>
                        </li>
                        <li>
                            <Navlink href="/menu" isActive={pathname.startsWith("/menu")}>Menu</Navlink>
                        </li>
                        {
                            user ? 
                            <>
                              <li>
                                <Navlink href="/account">{profile?.displayName}</Navlink>
                              </li>
                              <li>
                                <Navlink href="/sign-out" className="inline-flex items-center justify-center w-full"><HiOutlineLogout className="h-5 w-5" /></Navlink>
                              </li>
                            </>
                            :
                            <li>
                                <Navlink href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</Navlink>
                            </li>
                        }
                    </ul>
                  </div>
                )
              }
            </div>
        </nav>
    )
}
*/