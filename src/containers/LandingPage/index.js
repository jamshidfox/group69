import BaseLayout from '../../components/Layout/BaseLayout';
import LandingContainer from './containers/LandingContainer';
import * as ROUTES from '../../constants/routes';
export default () => [
  {
    path: ROUTES.LANDING_PAGE,
    layout: BaseLayout,
    component: LandingContainer,
  },
];
