import React, { Suspense, lazy } from 'react';
import { ColorVars } from '../interfaces/colors';

const BackgroundAnimation = lazy(() => import('../animations/backgroundAnimation'));

type Props = {
  colorVars: ColorVars
}

const Background: React.FC<Props> = ({ colorVars }) => {
  const isSSR = typeof window === 'undefined';

  if (isSSR) return null;
  return (
    <Suspense fallback={<div />}>
      <BackgroundAnimation colorVars={colorVars} />
    </Suspense>
  );
};

export default Background;
