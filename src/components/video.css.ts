import { globalStyle, style } from '@vanilla-extract/css';

export const video = style({
  width: '100%',
});

globalStyle(`${video} > video`, {
  width: '100%',
  maxHeight: 'calc(100vh - 8rem)',
  objectFit: 'contain',
});

globalStyle(`${video} > .video-react-button`, {
  display: 'none',
});
