/* global describe, beforeAll, it, page, expect */

beforeAll(async () => {
  await page.goto('http://localhost:8000/exercise/part4-functions-as-values/');
});

describe('The filter function', () => {
  it('should not use Array.prototype.filter', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = Array.prototype.filter;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc.apply(this, args); };

      try {
        Array.prototype.filter = patchedFunc;
        filter([1, 2, 3, 4, 5], (x) => true);
      } finally {
        Array.prototype.filter = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(0);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; filter(arr, (x) => false); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return a filtered array', async () => {
    let value;

    value = await page.evaluate(() => filter([1, 2, 3, 4, 5], (x) => x % 2 === 0));
    expect(value).toEqual([2, 4]);

    value = await page.evaluate(() => filter([1, 2, 3, 4, 5], (x) => x % 2 === 1));
    expect(value).toEqual([1, 3, 5]);
  });
});

describe('The map function', () => {
  it('should not use Array.prototype.map', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = Array.prototype.map;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc.apply(this, args); };

      try {
        Array.prototype.map = patchedFunc;
        map([1, 2, 3, 4, 5], (x) => x);
      } finally {
        Array.prototype.map = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(0);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; map(arr, (x) => x * 2); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return a mapped array', async () => {
    let value;

    value = await page.evaluate(() => map([1, 2, 3, 4, 5], (x) => x * 2));
    expect(value).toEqual([2, 4, 6, 8, 10]);
  });
});

describe('The reduce function', () => {
  it('should not use Array.prototype.reduce', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = Array.prototype.reduce;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc.apply(this, args); };

      try {
        Array.prototype.reduce = patchedFunc;
        reduce([1, 2, 3, 4, 5], (x, y) => y, null);
      } finally {
        Array.prototype.reduce = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(0);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; reduce(arr, (x, y) => x / y, 1); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return a reduced value', async () => {
    let value;

    value = await page.evaluate(() => reduce([1, 2, 3, 4, 5], (x, y) => [x, y], []));
    expect(value).toEqual([[[[[[], 1], 2], 3], 4], 5]);
  });
});
