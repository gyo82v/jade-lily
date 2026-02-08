"use client"

import { usePathname } from "next/navigation";
import { useAuth } from "@/firebase/authProvider";
import { HiMenu, HiOutlineLogout, HiX } from "react-icons/hi";
import { useState, useEffect, useRef, useCallback } from "react";
import HeaderLinks from "./HeaderLinks";
import { pillStyle } from "@/components/styles";
import { DefaultAvatar } from "@/components/ui";

export default function Navbar() {
  const { user, profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);

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
      toggleButtonRef.current?.focus();
    }
    return () => {
      if (prevBodyOverflow.current !== null) {
        document.body.style.overflow = prevBodyOverflow.current;
        prevBodyOverflow.current = null;
      }
    };
  }, [isOpen]);

  useEffect(() => {
  if (!isOpen) return;
  const onKey = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }
    if (e.key !== "Tab" || !panelRef.current) return;

    const focusable = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select'
      )
    ).filter((el) => el.offsetParent !== null);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);


  useEffect(() => {
  if (isOpen) {
    // small timeout to ensure DOM painted
    setTimeout(() => {
      // focus first focusable or panel root
      const first = panelRef.current?.querySelector<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      (first ?? panelRef.current)?.focus();
    }, 0);
  }
  }, [isOpen]);

  const onBackdropMouseDown = useCallback<React.MouseEventHandler<HTMLDivElement>>((e) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
    setIsOpen(false);
  }
  }, []);

  const onPanelClick = useCallback<React.MouseEventHandler<HTMLDivElement>>((e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    if (target.closest("a")) setIsOpen(false);
  }, []);


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
          ref={toggleButtonRef}
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
              aria-labelledby="mobile-menu-title"
              ref={panelRef}
              onClick={onPanelClick}
              className={`ml-auto relative w-[80%] max-w-xs h-full bg-white shadow-2xl 
                          rounded-l-lg p-4 transform transition-transform duration-300 ease-out`}
            >
              <div className="flex items-center justify-between mb-4">
                <div id="mobile-menu-title" className="text-lg font-semibold">Menu</div>
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
                  <HeaderLinks href="/" isActive={pathname === "/"} variant="mobile">
                    Home
                  </HeaderLinks>
                </li>
                <li>
                  <HeaderLinks href="/about" isActive={pathname.startsWith("/about")} variant="mobile">
                    About
                  </HeaderLinks>
                </li>
                <li>
                  <HeaderLinks href="/menu" isActive={pathname.startsWith("/menu")} variant="mobile">
                    Menu
                  </HeaderLinks>
                </li>

                {user ? (
                  <>
                    <li>
                      <HeaderLinks href="/account" variant="mobile">
                        {profile?.displayName ?? "Account"}
                      </HeaderLinks>
                    </li>
                    <li>
                      <HeaderLinks 
                        href="/sign-out" 
                        className="inline-flex items-center h-12" 
                        variant="mobile" 
                        aria-label="Sign out" 
                        title="Sign out"
                      >
                        <HiOutlineLogout className="h-5 w-5 mr-2" /> Sign out
                      </HeaderLinks>
                    </li>
                  </>
                ) : (
                  <li>
                    <HeaderLinks href="/sign-in" isActive={pathname.startsWith("/sign-in")} variant="mobile">
                      Sign in
                    </HeaderLinks>
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
