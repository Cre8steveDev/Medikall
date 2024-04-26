import { ReactElement } from 'react';

export type TServiceForCarousel = {
  image: string;
  title: string;
  description: string;
  route: string;
  icon: ReactElement;
  color: string;
};

export type TCategoryForCarousel = {
  title: string;
  route: string;
  icon: string;
};
