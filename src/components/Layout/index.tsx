import { Outlet } from 'react-router-dom';
import { Track } from '../MusicPlayer';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import userUnknown from '@/assets/icons/user-unknown.svg';
import { userAtom } from '@/atoms/user-atom';
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
const Layout = () => {
  const user = useAtomValue(userAtom);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const tracks: Track[] = [
    {
      id: '1',
      title: 'Bubble',
      artist: 'Miaow',
      album: 'Miaow',
      duration: 100,
      image: 'http://jPlayer.org/audio/mp3/Miaow-07-Bubble.jpg',
      audio:
        'https://staskobzar.github.io/vue-audio-visual/file_example_MP3_1MG.mp3',
    },
    {
      id: '2',
      title: 'Bubble2',
      artist: 'Miaow2',
      album: 'Miaow2',
      duration: 100,
      image: 'http://jPlayer.org/audio/mp3/Miaow-07-Bubble.jpg',
      audio: 'http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3',
    },
  ];
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex h-8">{/* TitleBar */}</div>
        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="flex w-64 flex-shrink-0 flex-col border-r">
            {/* Sidebar Header */}
            <div className="m-2">
              <LogoPanel />
            </div>

            {/* Sidebar Content */}
            <ScrollArea className="flex-1 p-2">
              {menuData.map((menu) => (
                <div className="px-3 py-2">
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    {menu.title}
                  </h2>
                  <div className="space-y-1">
                    {menu.items?.map((item) => (
                      <>
                        <Button
                          variant={
                            item.path === pathname ? 'secondary' : 'ghost'
                          }
                          className="w-full justify-start"
                          onClick={() => navigate(item.path)}
                        >
                          {item.icon && (
                            <Icon
                              name={
                                item.icon as keyof typeof dynamicIconImports
                              }
                            />
                          )}
                          {item.title}
                        </Button>
                      </>
                    ))}
                  </div>
                </div>
              ))}
            </ScrollArea>

            {/* Sidebar Footer */}
            <div className="m-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.avatar} alt={user.username} />
                      <AvatarFallback className="rounded-lg">
                        <img src={userUnknown} />
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {user.username}
                      </span>
                      <span className="truncate text-xs">{user.email}</span>
                    </div>
                    <Icon className="ml-auto size-4" name="chevrons-up-down" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  side="bottom"
                  align="end"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                      <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage src={user.avatar} alt={user.username} />
                        <AvatarFallback className="rounded-lg">
                          <img src={userUnknown} />
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">
                          {user.username}
                        </span>
                        <span className="truncate text-xs">{user.email}</span>
                      </div>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Icon name="sparkles" />
                      Upgrade to Pro
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Icon name="badge-check" />
                      Account
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Icon name="credit-card" />
                      Billing
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Icon name="bell" />
                      Notifications
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Icon name="log-out" />
                    Log out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Main Content */}
          <ScrollArea className="mb-12 flex-1 px-6 pt-6">
            <Outlet />
          </ScrollArea>
          <MusicPlayer tracks={tracks} />
        </div>
      </div>
      {/* <SidebarProvider>
        <SidePanel />
        <main className="container h-full px-4 pb-8 pt-12">
          <Outlet />t
        </main>
        <MusicPlayer tracks={tracks} />
      </SidebarProvider> */}
    </>
  );
};

export default Layout;
