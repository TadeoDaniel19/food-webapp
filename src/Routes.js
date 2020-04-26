import MemoR from './MemoR'
import Hoc from './Hoc'
import Home from './Home'
import Should from './Should'
import UseMemoR from './UseMemoR'


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
  },
  {
    path: '/usememo',
    sidebarName: 'useMemo',
    component: UseMemoR
  }
];

export default Routes;