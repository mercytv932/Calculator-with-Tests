import {add, subtract, multiply, divide} from './calculator';

test('add two numbers', () =>{
  expect(add(2,3)).toBe (5);
});


test('subtract two numbers', () =>{
  expect(subtract(3,2)).toBe (1);
});

test('multiply two numbers', () => {
  expect(multiply(2,3)).toBe (6)
})


test('divide two numbers', () => {
  expect(divide(6,3)).toBe (2)
})

test('divide by zero', () =>{
  expect(divide(6,0)).toBe(Infinity);
})



test('adds negative numbers', () => {
  expect(add(-1, -1)).toBe(-2);
});

test('subtracts to get negative results', () => {
  expect(subtract(2, 5)).toBe(-3);
});

test('multiplies by zero', () => {
  expect(multiply(5, 0)).toBe(0);
});

test('divides to get a decimal', () => {
  expect(divide(10, 4)).toBe(2.5);
});

