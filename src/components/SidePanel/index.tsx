'use client';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { Link } from 'react-router-dom';
const menuData = [
  {
    title: 'Discover',
    items: [
      {
        title: 'Listen Now',
        url: '#',
        icon: 'youtube',
        path: '/listen-now',
      },
      {
        title: 'Browse',
        url: '#',
        icon: 'inbox',
        path: '/browse',
      },
      {
        title: 'Radio',
        url: '#',
        icon: 'radio',
        path: '/radio',
      },
    ],
  },
  {
    title: 'Library',
    items: [
      {
        title: 'Playlists',
        url: '#',
        icon: 'list-music',
        path: '/library/playlists',
      },
      {
        title: 'Songs',
        url: '#',
        icon: 'music-2',
        path: '/library/songs',
      },
    ],
  },
  {
    title: 'Settings',
  },
];
const SidePanel = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log('pathname', pathname);
  }, [pathname]);
  return (
    <Sidebar className="pt-8">
      <SidebarHeader>
        <LogoPanel />
      </SidebarHeader>
      <SidebarContent>
        {menuData.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="mb-2 px-4 text-lg font-semibold tracking-tight">
              <h2>{group.title}</h2>
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items?.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={item.path === pathname}
                    >
                      <Link className="mb-2 px-4 text-lg" to={item.path}>
                        {item.icon && (
                          <Icon
                            name={item.icon as keyof typeof dynamicIconImports}
                          />
                        )}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
        <SidebarGroup>
          <SidebarGroupContent>
            <ModeToggle />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <FooterPanel />
      </SidebarFooter>
    </Sidebar>
  );
};

export default SidePanel;
