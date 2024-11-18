import dynamicIconImports from 'lucide-react/dynamicIconImports';
import React from 'react';
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
const SideMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      {menuData.map((menu) => (
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            {menu.title}
          </h2>
          <div className="space-y-1">
            {menu.items?.map((item) => (
              <>
                <Button
                  variant={item.path === pathname ? 'secondary' : 'ghost'}
                  className="w-full justify-start"
                  onClick={() => navigate(item.path)}
                >
                  {item.icon && (
                    <Icon name={item.icon as keyof typeof dynamicIconImports} />
                  )}
                  {item.title}
                </Button>
              </>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideMenu;
