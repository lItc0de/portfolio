import React, { useRef, useEffect } from 'react';
import p5 from 'p5';

import * as styles from './backgroundAnimation.css';

import p5Animation, { setColorVars } from './animation';
import { ColorVars } from '../interfaces/colors';

type Props = {
  colorVars: ColorVars;
  className?: string;
}

const defaultProps: Props = {
  className: '',
} as Props;

const BackgroundAnimation: React.FC<Props> = ({ colorVars, className }) => {
  const canvas = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvas.current) return;

    canvas.current.innerHTML = '';

    // eslint-disable-next-line
    new p5(p5Animation, canvas.current);
  }, [canvas]);

  useEffect(() => {
    if (!colorVars) return;

    setColorVars(colorVars);
  }, [colorVars]);

  return (
    <div className={`${styles.backgroundAnimation} ${className}`}>
      <div ref={canvas} />
      <div id="fr" className={styles.framerate} />
    </div>
  );
};

BackgroundAnimation.defaultProps = defaultProps;

export default BackgroundAnimation;
