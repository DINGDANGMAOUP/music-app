import { cn } from '@/lib/utils';
import {
  CirclePause,
  CirclePlay,
  SkipBack,
  SkipForward,
  Volume,
} from 'lucide-react';
import React from 'react';

interface PlayerControlsProps {
  isPlaying: boolean;
  onPlayPauseClick: (isPlaying: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = React.memo((props) => {
  const { isPlaying, onPlayPauseClick, onPrevClick, onNextClick } = props;
  return (
    <div>
      <Button variant="ghost" size="icon" onClick={onPrevClick}>
        <SkipBack />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => onPlayPauseClick(!isPlaying)}
      >
        <CirclePlay
          className={cn('rotate-0 scale-100 transition-all', {
            'rotate-90 scale-0': isPlaying,
          })}
        />
        <CirclePause
          className={cn('absolute rotate-90 scale-0 transition-all', {
            'rotate-0 scale-100': isPlaying,
          })}
        />
      </Button>
      <Button variant="ghost" size="icon" onClick={onNextClick}>
        <SkipForward />
      </Button>
      <Button variant="ghost" size="icon">
        <Volume />
      </Button>
    </div>
  );
});

export default PlayerControls;
