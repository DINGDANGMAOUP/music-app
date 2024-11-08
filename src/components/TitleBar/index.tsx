'use client';
import getSystem from '@/utils/system';
import styles from './index.module.css';

import Toolbar from './Toolbar';
import WindowControls from './WindowControls';
import { cn } from '@/lib/utils';
const currentPlatform = getSystem();
const TitleBar = () => {
  return (
    <div
      data-tauri-drag-region={currentPlatform === 'windows'}
      className={styles.titlebar}
    >
      <div
        className={cn(
          styles['title-toolbar'],
          currentPlatform === 'windows' ? 'justify-between' : 'justify-start',
        )}
      >
        <Toolbar />
        {currentPlatform === 'windows' && <WindowControls />}
      </div>
    </div>
  );
};

export default TitleBar;
