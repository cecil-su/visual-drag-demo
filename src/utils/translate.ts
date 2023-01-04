import { divide, multiply } from 'mathjs';

function angleToRadian(angle: number) {
  return (angle * Math.PI) / 180;
}

interface Coordinate {
  x: number;
  y: number;
}

export function calculateRotatePointCoordinate(
  point: Coordinate,
  center: Coordinate,
  rotate: number,
) {
  return {
    x:
      (point.x - center.x) * Math.cos(angleToRadian(rotate)) -
      (point.y - center.y) * Math.sin(angleToRadian(rotate)) +
      center.x,
    y:
      (point.x - center.x) * Math.sin(angleToRadian(rotate)) +
      (point.y - center.y) * Math.cos(angleToRadian(rotate)) +
      center.y,
  };
}

export function getRotatedPointCoordinate(
  style: any,
  center: Coordinate,
  name: string,
) {
  let point: any;
  switch (name) {
    case 't':
      point = {
        x: style.left + style.width / 2,
        y: style.top,
      };

      break;
  }

  return calculateRotatePointCoordinate(point, center, style.rotate);
}

export function changeStyleWithScale(value: number, scale: number) {
  return multiply(value, divide(scale, 100));
}

export function toPercent(v: number) {
  return v * 100 + '%';
}
