import add from './calculator';

test('add two numbers', () =>{
  expect(add(2,3)).toBe (5);
});