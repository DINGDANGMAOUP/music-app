import { useEffect, useMemo } from 'react';
import styles from './window-controls.module.css';
import { Button } from '../ui/button';
import { getCurrentWindow } from '@tauri-apps/api/window';

import Icon from '../Icon';
import { cn } from '@/lib/utils';
import { windowAtom } from '@/atoms/window-atom';
const WindowControls = () => {
  const [windowState, setWindowState] = useAtom(windowAtom);
  const appWindow = useMemo(() => {
    return getCurrentWindow();
  }, []);
  const minimize = async () => appWindow.minimize();
  const maximize = () => appWindow.maximize();
  const unmaximize = () => appWindow.unmaximize();
  const close = async () => appWindow.close();
  useEffect(() => {
    appWindow.onResized(async () => {
      const isMaximize = await appWindow.isMaximized();
      if (isMaximize !== windowState.isMaximize) {
        setWindowState({ isMaximize: isMaximize });
      }
    });
  }, [appWindow, setWindowState, windowState.isMaximize]);
  return (
    <div>
      <Button
        className={styles['titlebar-button']}
        variant="ghost"
        size="icon"
        onClick={minimize}
      >
        <Icon name="minus" />
      </Button>

      {windowState.isMaximize ? (
        <Button
          className={styles['titlebar-button']}
          variant="ghost"
          size="icon"
          onClick={unmaximize}
        >
          <Icon name="minimize" />
        </Button>
      ) : (
        <Button
          className={styles['titlebar-button']}
          variant="ghost"
          size="icon"
          onClick={maximize}
        >
          <Icon name="maximize" />
        </Button>
      )}

      <Button
        className={cn(styles['titlebar-button'], 'hover:bg-red-300')}
        variant="ghost"
        size="icon"
        onClick={close}
      >
        <Icon name="x" />
      </Button>
    </div>
  );
};

export default WindowControls;
