import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { routes } from '../utils/locationMapper';

type Props = {
  location: Location
}

const Navigate: React.FC<Props> = ({ children, location }) => {
  const nextPage = () => {
    const routesCount = routes.length;
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex >= routesCount) return;

    navigate(routes[currentIndex + 1]);
  };

  const prevPage = () => {
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex <= 0) return;

    navigate(routes[currentIndex - 1]);
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === undefined) return;
    if (event.key === 'ArrowDown') nextPage();
    if (event.key === 'ArrowUp') prevPage();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [location]);

  return (<div>{children}</div>);
};

export default Navigate;
