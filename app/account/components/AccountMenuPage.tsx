"use client"

import { useEffect, useState, useRef } from "react"
import { getItems } from "@/firebase/dishCollectionClient"
import type { DishProps } from "@/types"
import { useAuth } from "@/firebase/authProvider"
import { MenuFilter } from "@/components/filters"
import AccountDishList from "./AccountDishList"

type Props = {
    category? : string
    pathname : string
    params : Record<string, string | string[] | undefined>
}

export default function AccountMenuPage({category, params, pathname}:Props){
    const [dishes, setDishes] = useState<DishProps[]>([])
    const {user, loading} = useAuth()
    const filtersArr = [...new Set(dishes.map(dish => dish.type))]
    const activeType = params?.type
    const filteredDishes = activeType ? dishes.filter(dish => dish.type === activeType) : dishes
    const scrollerRef = useRef<HTMLDivElement | null>(null);
    const outerWrapRef = useRef<HTMLDivElement | null>(null);  
    const [scrollerOverflows, setScrollerOverflows] = useState(false);

    function claimScrollerFocus(e?: React.SyntheticEvent) {
  // small guard: only focus if scroller exists and isn't already focused
  if (!scrollerRef.current) return;
  if (document.activeElement === scrollerRef.current) return;

  try {
    scrollerRef.current.focus({ preventScroll: true } as FocusOptions);
  } catch {
    // some browsers don't support the option, call without it
    scrollerRef.current.focus();
  }
}

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getItems({available : true, category})
                if(!data) throw new Error("no data available")
                setDishes(data)
            }catch(err){
               console.error("failed to fetch data:", err)
            }
        }
        fetchData()
    }, [category])

    useEffect(() => {
    function checkOverflow() {
      const el = scrollerRef.current;
      if (!el) {
        setScrollerOverflows(false);
        return;
      }
      const over = el.scrollWidth > el.clientWidth + 1; // small tolerance
      setScrollerOverflows(over);
    }

    // check initially (after next tick so DOM layout is stable)
    requestAnimationFrame(checkOverflow);

    // re-check on window resize
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [filtersArr.length /* or dishes.length */]);

  // EFFECT: when scroller actually overflows on small screens, lock body horizontal scroll
  useEffect(() => {
    // only do this on client and on small screens
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth <= 768;
    if (!isMobile || !scrollerOverflows) return;

    const prev = document.body.style.overflowX || "";
    document.body.style.overflowX = "hidden";

    return () => {
      // restore exactly what was there before
      document.body.style.overflowX = prev;
    };
  }, [scrollerOverflows]);

    if (loading) return <div className="p-6">Loading...</div>
    if (!user) {
        console.error("AccountMenuPage: user missing on protected page");
        return null;
    }
   
    return (
<div className="border-2 border-purple-700">
  {/* outer container: clips overflow so page won't widen */}
  <div
    className="overflow-hidden border-2 border-sky-500"
    // If user touches / clicks the area (outside or inside the scroller),
    // we immediately focus the scroller so horizontal gestures are captured there.
    onMouseDown={claimScrollerFocus}
    onTouchStart={claimScrollerFocus}
    ref={outerWrapRef}
  >
    {/* the actual scrollable element */}
    <div
      ref={scrollerRef}
      tabIndex={0} // make focusable
      className="overflow-x-auto no-scrollbar px-4 overscroll-contain focus:outline-none"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
      // optional: prevent accidental keyboard outline when focused via keyboard
      aria-label="Menu filters"
    >
      <div className="inline-block min-w-max border-2 border-green-500">
        <MenuFilter array={filtersArr} params={activeType} pathname={pathname} />
      </div>
    </div>
  </div>

  <AccountDishList dishes={filteredDishes} userId={user.uid} />
</div>
    )
}



/*

<div className="border-2 border-purple-700">
     <div className="overflow-hidden border-2 border-sky-500">
    <div
      className="overflow-x-auto no-scrollbar px-4 overscroll-contain border-2 border-red-500"
      style={{ WebkitOverflowScrolling: "touch", touchAction: "pan-x" }}
    >
      <div className="inline-block min-w-max border-2 border-green-500">
        <MenuFilter array={filtersArr} params={activeType} pathname={pathname} />
      </div>
    </div>
  </div>
 
  <AccountDishList dishes={filteredDishes} userId={user.uid} />
</div>





*/


