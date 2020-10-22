import bxUser from '@iconify/icons-bx/bx-user';
import bxCompass from '@iconify/icons-bx/bx-compass';
import outlineFavoriteBorder from '@iconify/icons-ic/baseline-favorite-border';
import outlineShoppingBag from '@iconify/icons-ic/outline-shopping-bag';

const NavigationData = [
  {
    value: 0,
    label: 'EXPLORE',
    icon: bxCompass,
    route: '/collections',
  },
  {
    value: 1,
    label: 'FAVORITES',
    icon: outlineFavoriteBorder,
    route: '/favorites',
  },
  {
    value: 2,
    label: 'CART',
    icon: outlineShoppingBag,
    route: '/cart',
  },
  {
    value: 3,
    label: 'ACCOUNT',
    icon: bxUser,
    route: '/signin',
  },
];

export default NavigationData;
