import {add, subtract} from './calculator';

test('add two numbers', () =>{
  expect(add(2,3)).toBe (5);
});


test('subtract two numbers', () =>{
  expect(subtract(2,3)).toBe (-1);
});
