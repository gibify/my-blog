/* eslint-disable camelcase */
import ReactGA from 'react-ga';

const useGAEventsTracker = (category: string) => {
  const eventTracker = (action: string, label?: string) => {
    ReactGA.event({ category, action, label });
  };
  return { eventTracker };
};

export default useGAEventsTracker;
