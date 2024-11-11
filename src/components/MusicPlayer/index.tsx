import mc from '@/assets/50-tobylane.mp3';
import { List } from 'lucide-react';
const MusicPlayer = () => {
  const audio = useRef<HTMLAudioElement | null>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [bufferProgress, setBufferProgress] = useState(0);
  //获取音频缓冲进度
  const bufferUpdateListener = useCallback(() => {
    if (audio.current) {
      const buffered = audio.current.buffered;
      if (buffered.length > 0) {
        const loaded = buffered.end(buffered.length - 1);
        const total = audio.current.duration;
        setBufferProgress((loaded / total) * 100);
      }
    }
  }, [audio]);
  //监听缓冲进度
  useEffect(() => {
    audio.current?.addEventListener('progress', bufferUpdateListener);
    return () => {
      audio.current?.removeEventListener('progress', bufferUpdateListener);
    };
  }, [audio, bufferUpdateListener]);
  const timeUpdateListener = useCallback(() => {
    setProgress(audio.current?.currentTime || 0);
  }, [audio]);

  useEffect(() => {
    audio.current = new Audio(mc);
    audio.current.addEventListener('timeupdate', timeUpdateListener);
    return () => {
      audio.current?.removeEventListener('timeupdate', timeUpdateListener);
    };
  }, [audio, timeUpdateListener]);
  useEffect(() => {
    if (isPlaying) {
      audio.current?.play();
      // startTimer();
    } else {
      audio.current?.pause();
    }
  }, [isPlaying]);
  const handlePlayPauseClick = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);
  return (
    <div className="fixed bottom-0 left-[var(--sidebar-width)] right-0 flex h-12 flex-row items-center justify-between border-t bg-white/30 p-1 backdrop-blur-xl">
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPauseClick}
        onPrevClick={() => {}}
        onNextClick={() => {}}
      />
      <div className="mx-2 w-[200px] flex-grow">
        <Slider
          value={[progress]}
          max={audio.current?.duration || 0}
          step={1}
          onValueChange={(e) => {
            console.log('onValueChange', e);
            if (audio.current) {
              audio.current.currentTime = e[0];
            }
          }}
        />
      </div>
      <Button variant="ghost" size="icon">
        <List />
      </Button>
    </div>
  );
};

export default MusicPlayer;
