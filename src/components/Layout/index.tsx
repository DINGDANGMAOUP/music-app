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
    <SidebarProvider>
      <SidePanel />
      <main className="h-full w-full px-4 pb-4 pt-8">
        <Outlet />
        <MusicPlayer tracks={tracks} />
      </main>
    </SidebarProvider>
  );
};

export default Layout;
