import {
  currentMusicIndexAtom,
  musicListAtom,
} from '@/atoms/musci-player-atom';
import { List } from 'lucide-react';

const MusicPlayer = () => {
  const audio = useRef<HTMLAudioElement | null>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const [bufferProgress, setBufferProgress] = useState(0);
  const musicList = useAtomValue(musicListAtom);
  const [currentMusicIndex, setCurrentMusicIndex] = useAtom(
    currentMusicIndexAtom,
  );
  const currentMusic = musicList?.[currentMusicIndex];
  const { title, src } = currentMusic;

  const reset = useCallback(() => {
    //进度重置
    setProgress(0);
    //缓冲进度重置
    setBufferProgress(0);
    //播放进度重置
    if (audio.current) audio.current.currentTime = 0;
  }, []);
  const handlePrevClick = useCallback(() => {
    setCurrentMusicIndex(
      (prev) => (prev - 1 + musicList.length) % musicList.length,
    );
    reset();
  }, [musicList.length, reset, setCurrentMusicIndex]);
  const handleNextClick = useCallback(() => {
    setCurrentMusicIndex((prev) => (prev + 1) % musicList.length);
    reset();
  }, [musicList.length, reset, setCurrentMusicIndex]);
  const handlePlayPauseClick = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);

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
  }, [bufferUpdateListener]);
  const timeUpdateListener = useCallback(() => {
    setProgress(audio.current?.currentTime || 0);
  }, [audio]);

  useEffect(() => {
    audio.current = new Audio(src);
    audio.current.addEventListener('timeupdate', timeUpdateListener);
    return () => {
      audio.current?.removeEventListener('timeupdate', timeUpdateListener);
    };
  }, [audio, src, timeUpdateListener]);
  useEffect(() => {
    if (isPlaying) {
      audio.current?.play();
    } else {
      audio.current?.pause();
    }
  }, [isPlaying]);
  //自动播放下一首 循环
  useEffect(() => {
    const handleEnded = () => {
      handleNextClick();
    };
    audio.current?.addEventListener('ended', handleEnded);
    return () => {
      audio.current?.removeEventListener('ended', handleEnded);
    };
  }, [audio, handleNextClick]);

  return (
    <div className="fixed bottom-0 left-[var(--sidebar-width)] right-0 flex h-12 flex-row items-center justify-between border-t bg-white/30 p-1 backdrop-blur-xl">
      <PlayerControls
        isPlaying={isPlaying}
        onPlayPauseClick={handlePlayPauseClick}
        onPrevClick={handlePrevClick}
        onNextClick={handleNextClick}
      />
      <div className="mx-2 w-[200px] flex-grow">
        title:{title},cache:{bufferProgress}
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
