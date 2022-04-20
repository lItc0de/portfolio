import React from 'react';
import * as styles from './video.css';

type Props = {
  src: string;
};

const Video: React.FC<Props> = ({ src }) => (
  <video
    className={styles.video}
    src={src}
    width="100%"
    height="100vh"
    playsInline
    muted
    loop
    autoPlay
  />
);

export default Video;
