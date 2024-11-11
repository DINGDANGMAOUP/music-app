export type UserAtom = {
  avatar: string;
  username: string;
  nickname: string;
  email: string;
  sex: string;
  phone: string;
};
const initAtom = {
  avatar: '/avatars/shadcn.jpg',
  username: 'dingdangmaoup',
  nickname: '',
  email: 'dingdangmaoup@gmail.com',
  sex: '',
  phone: '',
};
export const userAtom = atom<UserAtom>(initAtom);
