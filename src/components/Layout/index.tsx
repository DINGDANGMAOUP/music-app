import { Provider } from 'jotai';
import { Outlet } from 'react-router-dom';
import { Track } from '../MusicPlayer';

const Layout = () => {
  const tracks: Track[] = [
    {
      id: '1',
      title: 'Bubble',
      artist: 'Miaow',
      album: 'Miaow',
      duration: 100,
      image: 'http://jPlayer.org/audio/mp3/Miaow-07-Bubble.jpg',
      audio: 'http://jPlayer.org/audio/mp3/Miaow-07-Bubble.mp3',
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
    <ThemeProvider defaultTheme="light" storageKey="music-app-theme">
      <Provider>
        <TitleBar />
        <SidebarProvider>
          <SidePanel />
          <main className="w-full pt-8">
            <Outlet />
            <MusicPlayer tracks={tracks} />
          </main>
        </SidebarProvider>
      </Provider>
    </ThemeProvider>
  );
};

export default Layout;
