import { globalStyle } from '@vanilla-extract/css';
import vars from './themes.css';

// globalFontFace('Fira Code', {
//   src: 'local("Comic Sans MS")'
// });

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

globalStyle('body', {
  fontFamily: vars.fonts.body,
  fontSize: vars.fonts.size,
  height: '100vh',
});

globalStyle('*', {
  boxSizing: 'border-box',
});

globalStyle('#___gatsby, #gatsby-focus-wrapper', {
  isolation: 'isolate',
  height: '100%',
});

globalStyle('canvas', {
  margin: 0,
  padding: 0,
  display: 'block',
});

// Text styles
globalStyle('code', {
  fontFamily: vars.fonts.code,
  backgroundColor: vars.colors.background.code,
  padding: '0.05rem 0.2rem',
  fontSize: '0.8rem',
  borderRadius: vars.borderRadius,
});

globalStyle('a', {
  textDecoration: 'underline',
  color: vars.colors.primary,
});

// globalStyle('em', {
//   color: 'blue',
// });

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontFamily: vars.fonts.headings,
  color: vars.colors.text.normal,
});

globalStyle('h1', {
  fontSize: '5rem',
});

globalStyle('h2', {
});

globalStyle('h3', {
});

globalStyle('h4', {
});

globalStyle('h5', {
});

globalStyle('h6', {
});

// Lists
globalStyle('ul', {
  padding: '0 2.2rem',
});

globalStyle('li', {
  // listStyle: 'disclosure-closed',
  listStyle: 'none',
  margin: '0.25rem 0',
});

globalStyle('li::before', {
  content: '☻',
  color: vars.colors.text.dimmed,
  display: 'inline-block',
  width: '1.2rem',
  marginLeft: '-1.2rem',
  fontSize: '1rem',
});
