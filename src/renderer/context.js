import { createSVGElement, mount } from './utils';

export function createContext(width, height) {
  // 创建画布宽高
  const svg = createSVGElement('svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);

  const g = createSVGElement('g');
  mount(svg, g);

  return {
    node: svg,
    group: g,
  };
}
