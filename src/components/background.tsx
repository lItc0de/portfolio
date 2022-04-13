import React, { Suspense, lazy } from 'react';

const BackgroundAnimation = lazy(() => import('../animations/backgroundAnimation'));

const Background: React.FC = () => {
  const isSSR = typeof window === 'undefined';

  if (isSSR) return null;
  return (
    <Suspense fallback={<div />}>
      <BackgroundAnimation />
    </Suspense>
  );
};

export default Background;
