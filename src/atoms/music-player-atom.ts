export type MusicPlayerAtomType = {
  isPlaying: boolean;
  progress: number;
};
const initAtom: MusicPlayerAtomType = {
  isPlaying: false,
  progress: 0,
};
export const musicPlayerAtom = atomWithStorage<MusicPlayerAtomType>(
  'music-player-atom',
  initAtom,
);
