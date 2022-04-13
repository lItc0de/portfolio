import { globalStyle } from '@vanilla-extract/css';
import vars from './globalTheme.css';

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  fontSize: vars.font.size,
  height: '100vh',
  width: '100vw',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('#___gatsby, #gatsby-focus-wrapper', {
  isolation: 'isolate',
  height: '100%',
});
