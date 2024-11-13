export type Music = {
  id: number;
  title: string;
  artist: string;
  cover: string;
  src: string;
};
export const musicListAtom = atom<Music[]>([
  {
    id: 1,
    title: 'cali-wataboi',
    artist: 'Jubel, NEIMY',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e2b5d1a5f4a3c9e3e1b6d3f5',
    src: 'http://10.10.201.24:7100/music/cali-wataboi.mp3',
  },
  {
    id: 2,
    title: '50-tobylane',
    artist: 'Jubel, NEIMY',
    cover: 'https://i.scdn.co/image/ab67616d0000b273e2b5d1a5f4a3c9e3e1b6d3f5',
    src: 'http://10.10.201.24:7100/music/50-tobylane.mp3',
  },
]);
export const currentMusicIndexAtom = atom(0);
