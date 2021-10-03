import Home from './Home'
import { Finder } from './components/finder'
import AddFoodFormContainer from './containers/foodForm';

const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/search',
    sidebarName: 'Buscador',
    component: Finder,
  },
  {
    path: '/addFood',
    sidebarName: 'Añadir Comida',
    component: AddFoodFormContainer,
  }
];

export default Routes;