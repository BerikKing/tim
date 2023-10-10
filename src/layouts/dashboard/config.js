import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserPlusIcon from '@heroicons/react/24/solid/UserPlusIcon';
import UsersIcon from '@heroicons/react/24/solid/UsersIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import HomeIcon from '@mui/icons-material/Home';

// Правый боковой панель
export const items = [
  {
    title: 'Басты бет',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <HomeIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Тапсырыстар',
    path: '/orders',
    icon: (
      <SvgIcon fontSize="small">
        <AddShoppingCartIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Тарифтер',
    path: '/tariffs',
    icon: (
      <SvgIcon fontSize="small">
        <PriceChangeIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Жеке кабинет',
    path: '/account',
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Баптаулар',
    path: '/settings',
    icon: (
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    )
  },
//   {
//     title: 'Login',
//     path: '/auth/login',
//     icon: (
//       <SvgIcon fontSize="small">
//         <LockClosedIcon />
//       </SvgIcon>
//     )
//   },
//   {
//     title: 'Register',
//     path: '/auth/register',
//     icon: (
//       <SvgIcon fontSize="small">
//         <UserPlusIcon />
//       </SvgIcon>
//     )
//   },
//   {
//     title: 'Error',
//     path: '/404',
//     icon: (
//       <SvgIcon fontSize="small">
//         <XCircleIcon />
//       </SvgIcon>
//     )
//   }
];
