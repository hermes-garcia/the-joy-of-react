import React from 'react';
import Link from 'next/link';

import NavLinks from '@/components/NavLinks';

async function SiteHeader() {

  return (
    <header className="site-header">
      <Link href="" className="logo">
        WebBase
      </Link>
      <nav>
        <ol className="header-nav-links">
          <React.Suspense>
            <NavLinks limit={4} />
          </React.Suspense>
        </ol>
      </nav>
    </header>
  );
}



export default SiteHeader;
