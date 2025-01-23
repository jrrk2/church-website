import { StaticImageData } from 'next/image';
import LoweImage from '@/assets/images/about/pastors/nick_2015_200px_1.jpg';
import SearleImage from '@/assets/images/about/pastors/john_searle2014.png';

export type PastorType = {
  image: StaticImageData;
  name: string;
  title: string;
};

export const pastorData: PastorType[] = [
  {
    image: LoweImage,
    name: 'Rev Nick Lowe',
    title: 'Full-time Pastor',
  },
  {
    image: SearleImage,
    name: 'John Searle',
    title: 'Lay Pastor',
  },
];
