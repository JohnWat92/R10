import {
  createRouter,
} from '@expo/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import NavigationLayout from './NavigationLayout';
import Session from '../scenes/Session';
import Speaker from '../scenes/Speaker';
import Faves from '../scenes/Faves';

const Router = createRouter(() => ({
  Layout: () => NavigationLayout,
  About: () => About,
  Session: () => Session,
  Schedule: () => Schedule,
  Speaker: () => Speaker,
  Faves: () => Faves,
}));

export default Router;
