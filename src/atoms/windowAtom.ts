export type WindowState = {
  isMaximize: boolean;
};
const initAtom: WindowState = {
  isMaximize: false,
};
export const windowAtom = atomWithStorage<WindowState>('window', initAtom);
