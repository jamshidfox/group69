import landing from './LandingPage';
import cartoons from './Cartoons';

const tester = () => [...landing(), ...cartoons()];
const Routes = () => [...tester()];

export default Routes;