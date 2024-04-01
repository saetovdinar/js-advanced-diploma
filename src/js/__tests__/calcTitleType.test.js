import * as calc from '../utils.js';

test('Должен верно рассчитать положение эелемента по всем координатам', () => {
  const arr = [0, 1, 7, 8, 9, 15, 56, 57, 63];
  const result = [];
  for (const value of arr) {
    result.push(calc.calcTileType(value, 8));
  }
  expect(result).toEqual(['top-left', 'top', 'top-right', 'left', 'center', 'right', 'bottom-left', 'bottom', 'bottom-right']);
});
