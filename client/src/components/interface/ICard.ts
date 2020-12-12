import { OpaqueInterpolation } from 'react-spring';

export interface ICardProps {
    _x: OpaqueInterpolation<string>;
    _y: OpaqueInterpolation<string>;
    num: number;
    index: number;
    data: any;
    active: boolean;
    setActive: Function;
  }