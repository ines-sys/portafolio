import { IFrameImage } from '../common/FrameImage/types';

export interface IProjectCard {
  title: string;
  desc: string;
  link: string;
  image: IFrameImage;
  category?: 'banking' | 'ecommerce';
}
