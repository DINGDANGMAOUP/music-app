import { cn } from '@/lib/utils';
import {
  CirclePause,
  CirclePlay,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from 'lucide-react';
import React from 'react';

interface PlayerControlsProps {
  isPlaying: boolean;
  volume: number;
  onPlayPauseClick: (isPlaying: boolean) => void;
  onPrevClick: () => void;
  onNextClick: () => void;
  onVolumeChange: (volume: number) => void;
}

const PlayerControls: React.FC<PlayerControlsProps> = React.memo((props) => {
  const {
    isPlaying,
    volume,
    onPlayPauseClick,
    onPrevClick,
    onNextClick,
    onVolumeChange,
  } = props;
  return (
    <div className="flex items-center justify-between">
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
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon">
            <Volume2
              className={cn('rotate-0 scale-100 transition-all', {
                'rotate-90 scale-0': volume === 0,
              })}
            />
            <VolumeX
              className={cn('absolute rotate-90 scale-0 transition-all', {
                'rotate-0 scale-100': volume === 0,
              })}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="flex justify-between">
          <Slider
            value={[volume]}
            max={1}
            step={0.01}
            onValueChange={(e) => {
              onVolumeChange(e[0]);
            }}
          />
          <div className="ml-2">{Math.round(volume * 100)}</div>
        </PopoverContent>
      </Popover>
    </div>
  );
});

export default PlayerControls;
