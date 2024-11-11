export type WindowState = {
  isMaximize: boolean;
};
export type WindowAction = {
  type: 'maximize' | 'unmaximize';
};
const initAtom: WindowState = {
  isMaximize: false,
};
export const windowAtom = atomWithStorage<WindowState>('window', initAtom);
