"use client";

import Link from "next/link";
import { renderIcon } from "@/lib/utilsIcons";
import { IconWrapper } from "../IconWrapper";
import type { FC } from "react";
import { FiRefreshCw } from "react-icons/fi";

type Props = {
  array: string[];
  pathname: string;
  params: string | string[] | undefined;
};

export const MenuFilter: FC<Props> = ({ array, pathname, params }) => {
  const activeParam =
    Array.isArray(params) && params.length > 0 ? String(params[0]) : (params as string | undefined);

  return (
    <section className="px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5">
      <nav aria-label="Menu filters">
        <ul className="flex gap-4 items-center">
          {array.map((filter) => {
            const isActive = filter === activeParam;
            const href = { pathname, query: { type: filter } };

            return (
              <li key={filter}>
                <Link 
                  href={href} 
                  title={filter} 
                  aria-current={isActive ? "page" : undefined} 
                  className="inline-flex items-center justify-center"
                >
                  <IconWrapper type={filter} className="p-2 rounded-full" interactive active={isActive}>    
                    <span className="sr-only">{filter}</span>
                    <span aria-hidden="true" className="inline-flex">
                      {renderIcon(filter)}
                    </span>
                  </IconWrapper>
                </Link>
              </li>
            );
          })}

          {activeParam && (
            <li>
                <Link href={pathname} title="Clear filter" aria-label="Clear filter (show all)">
                  <IconWrapper className="p-2 rounded-full" interactive>
                    <span className="sr-only">Clear filter</span>
                    <span aria-hidden="true">
                      <FiRefreshCw />
                    </span>
                 </IconWrapper>
                </Link>
            </li>
          )}
        </ul>
      </nav>
    </section>
  );
};