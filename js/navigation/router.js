import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  Layout: () => NavigationLayout,
  About: () => About,
  Session: () => Session,
  Schedule: () => Schedule,
  Speaker: () => Speaker,
}));

export default Router;
