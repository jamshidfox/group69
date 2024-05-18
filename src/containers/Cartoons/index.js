import BaseLayout from '../../components/Layout/BaseLayout';
import CartoonsContainer from './containers/CartoonsContainer';
import * as ROUTES from '../../constants/routes';

export default () => [
  {
    path: ROUTES.CARTOONS,
    layout: BaseLayout,
    component: CartoonsContainer,
  },
];
