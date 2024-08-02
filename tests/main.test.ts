import { it, describe, expect } from 'vitest';

describe('group', () => {
 it('test', () => {
  function sum(a: number, b: number) {
   return a + b;
  }
  expect(sum(1, 2)).toBe(3);
 });
});
