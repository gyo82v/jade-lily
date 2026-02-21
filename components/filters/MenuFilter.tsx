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

const MOBILE_TWO_ROW_THRESHOLD = 6;

export const MenuFilter: FC<Props> = ({ array, pathname, params }) => {
  const activeParam =
    Array.isArray(params) && params.length > 0
      ? String(params[0])
      : (params as string | undefined);

  // Build list including reset button (for mobile logic only)
  const mobileItems = [...array];
  if (activeParam) mobileItems.push("__CLEAR__");

  const shouldUseTwoRows = mobileItems.length > MOBILE_TWO_ROW_THRESHOLD;

  const splitIndex = Math.ceil(mobileItems.length / 2);
  const topRow = mobileItems.slice(0, splitIndex);
  const bottomRow = mobileItems.slice(splitIndex);

  function renderItem(key: string) {
    if (key === "__CLEAR__") {
      return (
        <li key="clear">
          <Link
            href={pathname}
            title="Clear filter"
            aria-label="Clear filter (show all)"
          >
            <IconWrapper className="p-2 rounded-full" interactive>
              <span className="sr-only">Clear filter</span>
              <span aria-hidden="true">
                <FiRefreshCw />
              </span>
            </IconWrapper>
          </Link>
        </li>
      );
    }

    const isActive = key === activeParam;
    const href = { pathname, query: { type: key } };

    return (
      <li key={key}>
        <Link
          href={href}
          title={key}
          aria-current={isActive ? "page" : undefined}
        >
          <IconWrapper
            type={key}
            className="p-2 rounded-full"
            interactive
            active={isActive}
          >
            <span className="sr-only">{key}</span>
            <span aria-hidden="true" className="inline-flex">
              {renderIcon(key)}
            </span>
          </IconWrapper>
        </Link>
      </li>
    );
  }

  return (
    <section className="px-2 md:px-4 lg:px-6 py-4 md:py-4 lg:py-5">
      <nav aria-label="Menu filters">
        {/* MOBILE */}
        {shouldUseTwoRows ? (
          <div className="flex flex-col gap-2 md:hidden items-center">
            <ul className="flex gap-3 items-center justify-center">
              {topRow.map(renderItem)}
            </ul>
            <ul className="flex gap-3 items-center justify-center">
              {bottomRow.map(renderItem)}
            </ul>
          </div>
        ) : (
          <ul className="flex md:hidden gap-3 items-center justify-center">
            {mobileItems.map(renderItem)}
          </ul>
        )}

        {/* DESKTOP */}
        <ul className="hidden md:flex gap-4 items-center justify-center">
          {array.map((filter) => {
            const isActive = filter === activeParam;
            const href = { pathname, query: { type: filter } };

            return (
              <li key={filter}>
                <Link
                  href={href}
                  title={filter}
                  aria-current={isActive ? "page" : undefined}
                >
                  <IconWrapper
                    type={filter}
                    className="p-2 rounded-full"
                    interactive
                    active={isActive}
                  >
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
              <Link
                href={pathname}
                title="Clear filter"
                aria-label="Clear filter (show all)"
              >
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
