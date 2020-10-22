import MensImage from '../assets/images/mens.jpg';
import WomensImage from '../assets/images/womens.jpg';
import HijabImage from '../assets/images/hijab.jpg';
import JacketsImage from '../assets/images/jackets.jpg';
import SneakersImage from '../assets/images/sneakers.jpg';

const DirectoryData = [
  {
    title: 'mens',
    imageUrl: MensImage,
    xs: 12,
    md: 6,
    mdScreen: 340,
    smScreen: 200,
  },
  {
    title: 'womens',
    imageUrl: WomensImage,
    xs: 12,
    md: 6,
    mdScreen: 340,
    smScreen: 200,
  },
  {
    title: 'hijab',
    imageUrl: HijabImage,
    xs: 12,
    md: 6,
    mdScreen: 480,
    smScreen: 320,
  },
  {
    title: 'jackets',
    imageUrl: JacketsImage,
    xs: 6,
    md: 3,
    mdScreen: 480,
    smScreen: 320,
  },
  {
    title: 'sneakers',
    imageUrl: SneakersImage,
    xs: 6,
    md: 3,
    mdScreen: 480,
    smScreen: 320,
  },
];

export default DirectoryData;
