import homeOption from '@iconify/icons-grommet-icons/home-option';
import bxUser from '@iconify/icons-bx/bx-user';
import bxCompass from '@iconify/icons-bx/bx-compass';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';

const NavigationData = [
  {
    value: 0,
    label: 'home',
    icon: homeOption,
    route: '/',
  },
  {
    value: 1,
    label: 'explore',
    icon: bxCompass,
    route: '/collections',
  },
  {
    value: 2,
    label: 'favorites',
    icon: outlineFavoriteBorder,
    route: '/favorites',
  },
  {
    value: 3,
    label: 'cart',
    icon: outlineShoppingBag,
    route: '/cart',
  },
  {
    value: 4,
    label: 'account',
    icon: bxUser,
    route: '/signin',
  },
];

export default NavigationData;
