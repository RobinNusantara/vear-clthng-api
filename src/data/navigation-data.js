import homeOption from '@iconify/icons-grommet-icons/home-option';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';
import bxUser from '@iconify/icons-bx/bx-user';

const NavigationData = [
  {
    value: 0,
    label: 'home',
    icon: homeOption,
    route: '/',
  },
  {
    value: 1,
    label: 'favorites',
    icon: outlineFavoriteBorder,
    route: '/favorites',
  },
  {
    value: 2,
    label: 'cart',
    icon: outlineShoppingBag,
    route: '/cart',
  },
  {
    value: 3,
    label: 'account',
    icon: bxUser,
    route: '/signin',
  },
];

export default NavigationData;
