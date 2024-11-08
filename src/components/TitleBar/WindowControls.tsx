'use client';
import React, { useEffect, useMemo, useState } from 'react';
import styles from './window-controls.module.css';
import { Button } from '../ui/button';
import { Window } from '@tauri-apps/api/window';

import Icon from '../Icon';
import { cn } from '@/lib/utils';
const WindowControls = () => {
  const [isMaximize, setIsMaximize] = useState(false);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const appWindow = useMemo(() => {
    return isClient ? new Window('main') : undefined;
  }, [isClient]);
  const minimize = async () => appWindow?.minimize();
  const maximize = async () => setIsMaximize(!isMaximize);
  const close = async () => appWindow?.close();
  useEffect(() => {
    if (isMaximize) appWindow?.maximize();
    else appWindow?.unmaximize();
  }, [appWindow, isMaximize]);
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
      <Button
        className={styles['titlebar-button']}
        variant="ghost"
        size="icon"
        onClick={maximize}
      >
        {isMaximize ? <Icon name="minimize" /> : <Icon name="maximize" />}
      </Button>
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
