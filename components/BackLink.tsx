// components/BackLink.tsx (replace your current file with this)
"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";
import { pillStyle } from "./styles";

const STORAGE_KEY = "jade_history";

/** Helpers to classify a path */
function isMenuCategory(path: string) {
  return /^\/menu(\/[^/?]+)?(?:\?.*)?$/.test(path);
}
function isMenuDish(path: string) {
  return /^\/menu\/[^/]+\/[^/]+(?:\/.*)?(?:\?.*)?$/.test(path);
}
function isAccountMenu(path: string) {
  return path.startsWith("/account") && path.includes("/menu");
}

/**
 * Return the "base" category path (no query, no extra child)
 * Example: "/menu/desserts?type=fruits" -> "/menu/desserts"
 */
function categoryBase(path: string): string | null {
  const m = path.match(/^\/menu(\/[^/?]+)?/);
  if (!m) return null;
  return m[0];
}

/**
 * Find the best previous path in session history.
 * Preference:
 * 1) category entries that include query (e.g. /menu/desserts?type=fruits)
 * 2) category entries without query (e.g. /menu/desserts)
 * 3) account menu pages
 * 4) any /menu or /account path
 *
 * Additionally: if we would return a category-without-query,
 * search earlier entries for a same-category entry that *does* include a query and prefer it.
 */
function findBestPrevious(currentPath: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const arr: string[] = JSON.parse(raw);

    const candWithQuery: string[] = [];
    const candNoQuery: string[] = [];
    const candAccount: string[] = [];
    const candAny: string[] = [];

    // build candidates from most recent backwards (skip last which is current)
    for (let i = arr.length - 2; i >= 0; i--) {
      const candidate = arr[i];
      if (!candidate) continue;
      if (candidate === currentPath) continue;

      if (isMenuCategory(candidate)) {
        if (candidate.includes("?")) candWithQuery.push(candidate);
        else candNoQuery.push(candidate);
        continue;
      }

      if (isAccountMenu(candidate)) {
        candAccount.push(candidate);
        continue;
      }

      if (candidate.startsWith("/menu") || candidate.startsWith("/account")) {
        candAny.push(candidate);
      }
    }

    // 1) prefer category-with-query
    if (candWithQuery.length) return candWithQuery[0];

    // 2) if we have a category-without-query, try to find an earlier query variant
    if (candNoQuery.length) {
      const chosenNoQuery = candNoQuery[0];
      // try to find any earlier entry in the entire array that starts with the same category + '?'
      const base = categoryBase(chosenNoQuery);
      if (base) {
        // scan the *entire* array (earlier entries included) for base + '?' versions
        for (let j = arr.length - 2; j >= 0; j--) {
          const cand = arr[j];
          if (!cand) continue;
          if (cand === currentPath) continue;
          if (cand.startsWith(base + "?")) {
            return cand; // prefer exact category+query candidate
          }
        }
      }
      // if none found, return the no-query candidate
      return chosenNoQuery;
    }

    // 3) account pages
    if (candAccount.length) return candAccount[0];

    // 4) any menu/account
    if (candAny.length) return candAny[0];
  } catch (err) {
    // ignore silently
  }
  return null;
}

type Props = {
  fallbackHref: string;
  label?: string;
};

export function BackLink({ fallbackHref, label = "Back to menu" }: Props) {
  const router = useRouter();

  async function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // respect modifier clicks
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();

    const current = `${window.location.pathname}${window.location.search || ""}`;

    // 1) improved session history
    const best = findBestPrevious(current);
    if (best) {
      // use replace to avoid polluting history / toggling back-and-forth
      router.replace(best);
      return;
    }

    // 2) fallback to referrer
    try {
      const ref = document.referrer || "";
      if (ref && ref.startsWith(window.location.origin)) {
        const refPathWithSearch = `${new URL(ref).pathname}${new URL(ref).search || ""}`;
        if (refPathWithSearch.startsWith("/menu") || refPathWithSearch.startsWith("/account")) {
          router.back();
          return;
        }
      }
    } catch (err) {
      console.error("Error processing referrer:", err);
    }

    // 3) fallbackHref
    router.push(fallbackHref);
  }

  return (
    <Link href={fallbackHref} onClick={handleClick} aria-label={label} className={`${pillStyle} hover:-translate-x-1`}>
      <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
      <span>{label}</span>
    </Link>
  );
}




/*
"use client"

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from 'react-icons/fi';
import { pillStyle } from "./styles";

type Props = {
    fallbackHref: string;
    label?: string;
}

export function BackLink({fallbackHref, label = "Back to menu"}: Props){
    const router = useRouter();

    function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
        if(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return 
        e.preventDefault();

        try{
            const ref = document.referrer || "";
            if(ref && ref.startsWith(window.location.origin)){
                const refPath = new URL(ref).pathname
                if(refPath.startsWith("/menu") || refPath.startsWith("/account")){
                    router.back();
                    return;
                }   
            }
        }catch(err){
            console.error("Error processing referrer:", err);
        }
        router.push(fallbackHref)
    }
    
    return(
        <Link
          href={fallbackHref} 
          onClick={handleClick}
          aria-label={label}
          className={`${pillStyle} hover:-translate-x-1`}
        >
          <FiArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>{label}</span>
        </Link>
    )
}

*/