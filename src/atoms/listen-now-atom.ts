export type Album = {
  id: string;
  name: string;
  artist: string;
  cover: string;
};
export type Subfield = {
  id: string;
  name: string;
  description: string;
  albums: Album[];
};

export type Category = {
  id: string;
  name: string;
  subfields: Subfield[];
};
const initAtom: Category[] = [
  {
    id: '1',
    name: 'Music',
    subfields: [
      {
        id: '1',
        name: 'Listen Now',
        description: 'Top picks for you. Updated daily.',
        albums: [
          {
            id: '1',
            name: 'React Rendezvous',
            artist: 'Ethan Byte',
            cover:
              'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=300&dpr=2&q=80',
          },
          {
            id: '2',
            name: 'Async Awakenings',
            artist: 'Nina Netcode',
            cover:
              'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
          },
          {
            id: '3',
            name: 'The Art of Reusability',
            artist: 'Lena Logic',
            cover:
              'https://images.unsplash.com/photo-1528143358888-6d3c7f67bd5d?w=300&dpr=2&q=80',
          },
          {
            id: '4',
            name: 'Stateful Symphony',
            artist: 'Beth Binary',
            cover:
              'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
          },
        ],
      },
      {
        id: '2',
        name: ' Made for You',
        description: 'Top picks for you. Updated daily.',
        albums: [
          {
            id: '1',
            name: 'Thinking Components',
            artist: 'Lena Logic',
            cover:
              'https://images.unsplash.com/photo-1615247001958-f4bc92fa6a4a?w=300&dpr=2&q=80',
          },
          {
            id: '2',
            name: 'Functional Fury',
            artist: 'Beth Binary',
            cover:
              'https://images.unsplash.com/photo-1513745405825-efaf9a49315f?w=300&dpr=2&q=80',
          },
          {
            id: '3',
            name: 'React Rendezvous',
            artist: 'Ethan Byte',
            cover:
              'https://images.unsplash.com/photo-1614113489855-66422ad300a4?w=300&dpr=2&q=80',
          },
          {
            id: '4',
            name: 'Stateful Symphony',
            artist: 'Beth Binary',
            cover:
              'https://images.unsplash.com/photo-1446185250204-f94591f7d702?w=300&dpr=2&q=80',
          },
          {
            id: '5',
            name: 'Async Awakenings',
            artist: 'Nina Netcode',
            cover:
              'https://images.unsplash.com/photo-1468817814611-b7edf94b5d60?w=300&dpr=2&q=80',
          },
          {
            id: '6',
            name: 'The Art of Reusability',
            artist: 'Lena Logic',
            cover:
              'https://images.unsplash.com/photo-1490300472339-79e4adc6be4a?w=300&dpr=2&q=80',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Podcasts',
    subfields: [
      {
        id: '1',
        name: 'Listen Now',
        description: 'Top picks for you. Updated daily.',
        albums: [
          {
            id: '1',
            name: 'Album 1',
            artist: 'Artist 1',
            cover: 'https://via.placeholder.com/150',
          },
          {
            id: '2',
            name: 'Album 2',
            artist: 'Artist 2',
            cover: 'https://via.placeholder.com/150',
          },
          {
            id: '3',
            name: 'Album 3',
            artist: 'Artist 3',
            cover: 'https://via.placeholder.com/150',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Live',
    subfields: [
      {
        id: '1',
        name: 'Listen Now',
        description: 'Top picks for you. Updated daily.',
        albums: [
          {
            id: '1',
            name: 'Album 1',
            artist: 'Artist 1',
            cover: 'https://via.placeholder.com/150',
          },
          {
            id: '2',
            name: 'Album 2',
            artist: 'Artist 2',
            cover: 'https://via.placeholder.com/150',
          },
          {
            id: '3',
            name: 'Album 3',
            artist: 'Artist 3',
            cover: 'https://via.placeholder.com/150',
          },
        ],
      },
    ],
  },
];
export const categoryAtom = atomWithStorage<Category[]>('category', initAtom);
