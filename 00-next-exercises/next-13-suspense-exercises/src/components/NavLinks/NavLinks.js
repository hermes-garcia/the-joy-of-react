import React from "react";
import Link from "next/link";
import { getNavLinks } from "@/helpers/web-base-helpers";

const NavLinks = async ({ limit = 0 }) => {
  let navLinks = await getNavLinks();
  if (limit !== 0) navLinks = navLinks.slice(0, 4); // Only show the first 4 links in the header.

  return navLinks.map(({ slug, label, href, type }) => (
    <li key={slug}>
      <Link href={href} className={`header-nav-link ${type}`}>
        {label}
      </Link>
    </li>
  ));
};

export default NavLinks;
