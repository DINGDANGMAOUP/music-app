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
    <div className="flex h-screen flex-col">
      <div className="flex h-8">{/* TitleBar */}</div>
      {/* Main Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="flex w-64 flex-shrink-0 flex-col border-r">
          {/* Sidebar Header */}
          <div className="m-2">
            <SideHeader />
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 p-2">
            <ScrollArea>
              <SideMenu />
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
          {/* Sidebar Footer */}
          <div className="m-2">
            <SideFooter />
          </div>
        </div>

        {/* Main Content */}
        <ScrollArea className="mb-12 flex-1 px-6 pt-6">
          <Outlet />
          <ScrollBar orientation="vertical" />
        </ScrollArea>
        <MusicPlayer tracks={tracks} />
      </div>
    </div>
  );
};

export default Layout;
