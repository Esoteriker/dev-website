// app/dashboard/layout.tsx
import React, { ReactNode } from 'react';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <nav>
        {/* 这里是导航栏 */}
        <Link href="/dashboard/main">Main</Link>
        <div> </div>
        <Link href="/dashboard/experience">Experience</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default DashboardLayout;