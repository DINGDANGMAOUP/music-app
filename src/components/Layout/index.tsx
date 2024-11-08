import React from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="music-app-theme">
      <TitleBar />
      <Outlet />
    </ThemeProvider>
  );
};

export default Layout;
