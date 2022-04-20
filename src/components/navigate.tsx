import React, { useEffect } from 'react';
import { navigate } from 'gatsby';
import { routes } from '../utils/locationMapper';

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
  // const [nextPagePath, setNextPagePath] = useState(routes[1]);

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

  // useEffect(() => {
  //   setNextPagePath(getNextPagePath());
  // }, [location]);

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
    else if (event.key === 'ArrowRight') nextPage();
    else if (event.key === 'ArrowUp') prevPage();
    else if (event.key === 'ArrowLeft') prevPage();
    else return;

    event.preventDefault();
  };

  const handleSingleTouch = (event: TouchEvent) => {
    window.removeEventListener('touchend', handleSingleTouch);

    if (event.changedTouches.length !== 1) return;

    const touch = event.changedTouches[0];
    const { clientX } = touch;
    const { innerWidth } = window;

    event.preventDefault();

    if (clientX < innerWidth / 2) {
      prevPage();
      return;
    }

    nextPage();
  };

  const handleTouchTimeout = () => {
    window.removeEventListener('touchend', handleSingleTouch);
  };

  const handleTouchstart = (event: TouchEvent) => {
    if (event.type !== 'touchstart') return;

    const timeThreshold = 100;
    window.addEventListener('touchend', handleSingleTouch);
    setTimeout(handleTouchTimeout, timeThreshold);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('touchstart', handleTouchstart);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('touchstart', handleTouchstart);
    };
  }, [location.pathname]);

  return (
    <div id={id} className={className}>
      {children}
      {/* <NextPageLink to={nextPagePath}>
        <ArrowDownThick />
      </NextPageLink> */}
    </div>
  );
};

Navigate.defaultProps = defaultProps;

export default Navigate;
