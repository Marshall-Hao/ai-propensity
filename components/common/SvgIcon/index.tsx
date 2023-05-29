import { FC } from 'react';

type SvgName =
  | 'user'
  | 'laptop'
  | 'mascara'
  | 'mascara-copy'
  | 'geo_location'
  | 'traffic_source'
  | 'mirror'
  | 'mirror-copy'
  | 'session_quality'
  | 'lipstick'
  | 'lipstick-copy'
  | 'time_spent'
  | 'right_arrow'
  | 'shopping-bag'
  | 'cross'
  | 'results1-left';

type TProps = {
  href: SvgName;
  fill?: '#ffffff' | '#4285F4' | '#174EA6';
  stroke?: '#ffffff' | '#4285F4' | '#174EA6';
  animate?: string;
};

const SvgIcon: FC<TProps> = ({
  href,
  fill = '#ffffff',
  stroke = '#4285F4',
  animate,
}) => {
  return (
    <svg style={{ width: '100%', height: '100%' }} className={animate}>
      <use href={`#propensity-${href}`} fill={fill} stroke={stroke}></use>
    </svg>
  );
};

export default SvgIcon;
