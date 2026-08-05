import barberia1 from '../assets/images/el-legado-barberia-1.jpg';
import barberia2 from '../assets/images/el-legado-barberia-2.jpg';
import barberia3 from '../assets/images/el-legado-barberia-3.jpg';
import barberia4 from '../assets/images/el-legado-barberia-4.jpg';
import barberia5 from '../assets/images/el-legado-barberia-5.jpg';
import barberia6 from '../assets/images/el-legado-barberia-6.jpg';
import hero from '../assets/images/hero-el-legado.jpg';

export const images = {
  'barberia-1': barberia1,
  'barberia-2': barberia2,
  'barberia-3': barberia3,
  'barberia-4': barberia4,
  'barberia-5': barberia5,
  'barberia-6': barberia6,
  hero,
} as const;

export type ImageKey = keyof typeof images;
