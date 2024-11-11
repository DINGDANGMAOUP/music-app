import defaultLogo from '@/assets/logo.png';
import React from 'react';
interface LogoPanelProps {
  href?: string;
  logo?: string;
}
const defaultHome = '/';
const LogoPanel: React.FC<LogoPanelProps> = ({ href, logo }) => {
  return (
    <div className="flex justify-center">
      <Link
        className="flex cursor-auto flex-row items-center"
        to={href || defaultHome}
      >
        <img src={logo || defaultLogo} width={50} height={50} />
        <div className="ml-2 text-center text-2xl font-semibold tracking-tight">
          Simple
        </div>
      </Link>
    </div>
  );
};

export default LogoPanel;
