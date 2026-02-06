"use client"

import { usePathname } from "next/navigation";
import { Navlink } from "@/components/navbars/Navlink";
import { useAuth } from "@/firebase/authProvider";
import { HiMenu, HiOutlineLogout, HiX } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import HeaderLinks from "./HeaderLinks";
import { pillStyle } from "@/components/styles";
import { DefaultAvatar } from "@/components/ui";

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

  const onBackdropMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  const onPanelClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest("a")) {
      setIsOpen(false);
    }
  };

  return (
    <nav className="flex items-center" role="navigation" aria-label="Primary">
      {/* Desktop menu */}
      <div className="hidden md:flex md:items-center lg:mr-5 xl:mr-10 ">
        <ul className="flex items-center gap-10 lg:gap-16 xl:gap-22">
          <li>
            <HeaderLinks href="/" isActive={pathname === "/"} className="">Home</HeaderLinks>
          </li>
          <li>
            <HeaderLinks href="/about" isActive={pathname.startsWith("/about")}>About</HeaderLinks>
          </li>
          <li>
            <HeaderLinks href="/menu" isActive={pathname.startsWith("/menu")}>Menu</HeaderLinks>
          </li>
          {user ? (
            <>
              <li>
                <HeaderLinks 
                  href="/account" 
                  className={`${pillStyle} text-sm`}
                >
                  <DefaultAvatar className="mr-2" aria-hidden="true" />
                  {profile?.displayName}
                </HeaderLinks>
              </li>
              <li>
                <HeaderLinks 
                  href="/sign-out" 
                  className="inline-flex items-center justify-center h-full"
                  aria-label="Sign out"
                  title="Sign out"
                >
                  <HiOutlineLogout className="h-5 w-5" />
                </HeaderLinks>
              </li>
            </>
          ) : (
            <li>
              <HeaderLinks href="/sign-in" isActive={pathname.startsWith("/sign-in")}>Sign in</HeaderLinks>
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
