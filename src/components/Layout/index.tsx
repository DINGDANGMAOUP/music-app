import { Provider } from 'jotai';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="music-app-theme">
      <Provider>
        <TitleBar />
        <SidebarProvider>
          <SidePanel />
          <Outlet />
        </SidebarProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default Layout;
