import React, { Suspense, lazy } from 'react';
import { ColorVars } from '../interfaces/colors';

const BackgroundAnimation = lazy(() => import('../animations/backgroundAnimation'));

type Props = {
  colorVars: ColorVars;
  className?: string;
}

const defaultProps: Props = {
  className: '',
} as Props;

const Background: React.FC<Props> = ({ colorVars, className }) => {
  const isSSR = typeof window === 'undefined';

  if (isSSR) return null;
  return (
    <Suspense fallback={<div />}>
      <BackgroundAnimation colorVars={colorVars} className={className} />
    </Suspense>
  );
};

Background.defaultProps = defaultProps;

export default Background;
