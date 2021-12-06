export function drawCircle(svg) {
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('x', 0);
  circle.setAttribute('y', 0);
  circle.setAttribute('r', 10);
  circle.setAttribute('color', 'blue');
  svg.appendChild(circle);
}
