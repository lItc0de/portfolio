import React from 'react';
import {
  Player,
  ControlBar,
  BigPlayButton,
} from 'video-react';
import * as styles from './video.css';

type Props = {
  src: string;
};

const Video: React.FC<Props> = ({ src }) => (
  <Player
    className={styles.video}
    src={src}
    fluid={false}
    width="100%"
    height="100vh"
    playsInline
    muted
    loop
    autoPlay
  >
    <BigPlayButton position="center" />
    <ControlBar style={{ display: 'none' }} autoHide={false} disableDefaultControls />
  </Player>
);

export default Video;
