import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import NextPageLink from './nextPageLink';
import { routes } from '../utils/locationMapper';
import ArrowDownThick from '../svgs/arrow-down-thick.svg';

type Props = {
  location: Location;
  className?: string;
  id?: string;
}

const defaultProps: Props = {
  className: '',
  id: '',
} as Props;

const Navigate: React.FC<Props> = ({
  children, location, className, id,
}) => {
  const routesCount = routes.length;
  const [nextPagePath, setNextPagePath] = useState(routes[1]);

  const getNextPagePath = () => {
    const currentIndex = routes.indexOf(location.pathname);

    if (currentIndex + 1 >= routesCount) return routes[0];
    return routes[currentIndex + 1];
  };

  const getPrevPagePath = () => {
    const currentIndex = routes.indexOf(location.pathname);

    if (currentIndex - 1 <= 0) return routes[0];
    return routes[currentIndex - 1];
  };

  useEffect(() => {
    setNextPagePath(getNextPagePath());
  }, [location]);

  const nextPage = () => {
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex + 1 >= routesCount) return;
    navigate(getNextPagePath());
  };

  const prevPage = () => {
    const currentIndex = routes.indexOf(location.pathname);
    if (currentIndex <= 0) return;
    navigate(getPrevPagePath());
  };

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === undefined) return;
    if (event.key === 'ArrowDown') nextPage();
    else if (event.key === 'ArrowUp') prevPage();
    else return;

    event.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [location.pathname]);

  return (
    <div id={id} className={className}>
      {children}
      <NextPageLink to={nextPagePath}>
        <ArrowDownThick />
      </NextPageLink>
    </div>
  );
};

Navigate.defaultProps = defaultProps;

export default Navigate;
