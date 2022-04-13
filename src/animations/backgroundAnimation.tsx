import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

import * as styles from './backgroundAnimation.css';

import p5Animation from './animation';

const BackgroundAnimation: React.FC = () => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    canvas.current.innerHTML = '';

    // eslint-disable-next-line
    new p5(p5Animation, canvas.current);
  }, [canvas]);

  return (
    <div className={styles.backgroundAnimation}>
      <div ref={canvas} />
      <div id="fr" className={styles.framerate} />
    </div>
  );
};

export default BackgroundAnimation;
