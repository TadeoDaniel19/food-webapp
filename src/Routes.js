import MemoR from './MemoR'
import Hoc from './Hoc'
import Home from './Home'
import Should from './Should'


const Routes = [
  {
    path: '/',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/should',
    sidebarName: 'Should Component',
    component: Should
  },
  {
    path: '/hoc',
    sidebarName: 'Hoc',
    component: Hoc
  },
  {
    path: '/memo',
    sidebarName: 'React.Memo',
    component: MemoR
  }
];

export default Routes;