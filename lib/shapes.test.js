const { Circle, Triangle, Square } = require('./shapes');

test('Circle class', () => {
  const circle = new Circle({ cx: 100, cy: 50, r: 30, fill: 'red' });
  expect(circle).toEqual({ cx: 100, cy: 50, r: 30, fill: 'red' });
});

test('Triangle class', () => {
  const triangle = new Triangle({ cx: 200, cy: 150, r: 20, fill: 'blue' });
  expect(triangle).toEqual({
    points: '200,130 180,170 220,170',
    fill: 'blue',
  });
});

test('Square class', () => {
  const square = new Square({ cx: 150, cy: 100, r: 25, fill: 'green' });
  expect(square).toEqual({ x: 125, y: 75, width: 50, height: 50, fill: 'green' });
});