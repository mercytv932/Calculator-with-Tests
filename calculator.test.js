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
