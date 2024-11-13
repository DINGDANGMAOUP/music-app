import { use } from 'i18next';
import { List } from 'lucide-react';
import styles from './inde.module.css';
import React, { CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export type Track = {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  image: string;
  audio: string;
};
interface MusicPlayerProps {
  tracks: Track[];
}
const MusicPlayer: React.FC<MusicPlayerProps> = (props) => {
  const { tracks } = props;
  //当前播放的音乐
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  //当前音乐
  const { audio } = tracks[currentTrackIndex];
  //音频引用
  const audioRef = useRef(new Audio(audio));
  const { duration } = audioRef.current;
  //缓冲进度
  const [trackBuffered, setTrackBuffered] = useState(0);
  //播放状态
  const [isPlaying, setIsPlaying] = useState(false);
  //播放进度
  const [trackProgress, setTrackProgress] = useState(0);
  //音量
  const [volume, setVolume] = useState(0.5);

  const handlePlayPauseClick = useCallback(() => {
    setIsPlaying((prev) => !prev);
  }, []);
  const handleNextClick = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
  }, [tracks.length]);
  const handlePrevClick = useCallback(() => {
    setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  }, [tracks.length]);
  const handleVolumeChange = useCallback((volume: number) => {
    setVolume(volume);
  }, []);

  const handleTrackProgress = useCallback((progress: number[]) => {
    audioRef.current.currentTime = progress[0];
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listenProgress = (e: any) => {
    const bufferedEnd = audioRef.current.buffered.end(
      audioRef.current.buffered.length - 1,
    );
    const duration = audioRef.current.duration;
    if (duration > 0) {
      setTrackBuffered((bufferedEnd / duration) * 100);
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const listenTimeUpdate = (e: any) => {
    const duration = audioRef.current.duration;
    const currentTime = audioRef.current.currentTime;
    if (duration > 0) {
      setTrackProgress(currentTime);
    }
  };

  const addListener = useCallback(() => {
    audioRef.current.addEventListener('progress', listenProgress);
    audioRef.current.addEventListener('timeupdate', listenTimeUpdate);
    audioRef.current.addEventListener('ended', handleNextClick);
  }, [handleNextClick]);
  const removeListener = useCallback(() => {
    audioRef.current.removeEventListener('progress', listenProgress);
    audioRef.current.removeEventListener('timeupdate', listenTimeUpdate);
    audioRef.current.removeEventListener('ended', handleNextClick);
  }, [handleNextClick]);
  useEffect(() => {
    removeListener();
    const { audio } = tracks[currentTrackIndex];
    audioRef.current.src = audio;
    addListener();
  }, [currentTrackIndex, addListener, removeListener, tracks]);
  //播放状态变化
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrackIndex]);
  //音量变化
  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume, currentTrackIndex]);
  return (
    <div className="fixed bottom-0 left-[var(--sidebar-width)] right-0 flex h-12 flex-row items-center justify-between border-t bg-white/30 p-2 backdrop-blur-xl">
      <PlayerControls
        isPlaying={isPlaying}
        volume={volume}
        onPlayPauseClick={handlePlayPauseClick}
        onNextClick={handleNextClick}
        onPrevClick={handlePrevClick}
        onVolumeChange={handleVolumeChange}
      />
      audio:{audio}
      <Slider
        value={[trackProgress]}
        max={duration}
        step={1}
        className={cn(styles['track-buffered'], 'mx-2')}
        onValueChange={(e) => {
          handleTrackProgress(e);
        }}
        style={
          {
            '--track-buffered': `${trackBuffered}%`,
          } as CSSProperties
        }
      />
      <Button variant="ghost">
        <List />
      </Button>
    </div>
  );
};

export default MusicPlayer;
