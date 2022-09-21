/* global describe, beforeAll, it, page, expect */

beforeAll(async () => {
  await page.goto('http://localhost:8000/exercise/part3-iterators/');
});

describe('The countItem function', () => {
  it('should return the number times an item is in an array', async () => {
    const value = await page.evaluate(() => countItem([1, 3, 7, 5, 7, 4], 7));
    expect(value).toEqual(2);
  });
});

describe('The filterEven function', () => {
  it('should use the isEven function', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = isEven;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc(...args); };

      try {
        isEven = patchedFunc;
        filterEven([1, 2, 3, 4, 5]);
      } finally {
        isEven = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(5);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; filterEven(arr); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the even items in an array', async () => {
    const value = await page.evaluate(() => filterEven([1, 2, 3, 4, 5]));
    expect(value).toEqual([2, 4]);
  });
});

describe('The filterOdd function', () => {
  it('should use the isOdd function', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = isOdd;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc(...args); };

      try {
        isOdd = patchedFunc;
        filterOdd([1, 2, 3, 4, 5]);
      } finally {
        isOdd = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(5);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; filterOdd(arr); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the odd items in an array', async () => {
    const value = await page.evaluate(() => filterOdd([1, 2, 3, 4, 5]));
    expect(value).toEqual([1, 3, 5]);
  });
});

describe('The mapIncrement function', () => {
  it('should use the plusOne function', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = plusOne;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc(...args); };

      try {
        plusOne = patchedFunc;
        mapIncrement([1, 2, 3, 4, 5]);
      } finally {
        plusOne = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(5);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; mapIncrement(arr); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array with each item incremented', async () => {
    const value = await page.evaluate(() => mapIncrement([1, 2, 3, 4, 5]));
    expect(value).toEqual([2, 3, 4, 5, 6]);
  });
});

describe('The mapTriple function', () => {
  it('should use the timesThree function', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = timesThree;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc(...args); };

      try {
        timesThree = patchedFunc;
        mapTriple([1, 2, 3, 4, 5]);
      } finally {
        timesThree = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toEqual(5);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; mapTriple(arr); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return an array with each item tripled', async () => {
    const value = await page.evaluate(() => mapTriple([1, 2, 3, 4, 5]));
    expect(value).toEqual([3, 6, 9, 12, 15]);
  });
});

describe('The reduceSum function', () => {
  it('should use the add function', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = add;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc(...args); };

      try {
        add = patchedFunc;
        reduceSum([1, 2, 3, 4, 5]);
      } finally {
        add = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toBeGreaterThanOrEqual(4);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; reduceSum(arr); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the sum of the array\'s items', async () => {
    const value = await page.evaluate(() => reduceSum([1, 2, 3, 4, 5]));
    expect(value).toEqual(15);
  });
});

describe('The reduceProduct function', () => {
  it('should use the multiply function', async () => {
    const result = await page.evaluate(() => {
      let callArgs = [];

      let originalFunc = multiply;
      let patchedFunc = (...args) => { callArgs.push(args); return originalFunc(...args); };

      try {
        multiply = patchedFunc;
        reduceProduct([1, 2, 3, 4, 5]);
      } finally {
        multiply = originalFunc;
      }

      return callArgs;
    });
    expect(result.length).toBeGreaterThanOrEqual(4);
  });

  it('should not change the original array', async () => {
    const value = await page.evaluate(() => { let arr = [1, 2, 3, 4, 5]; reduceProduct(arr); return arr; });
    expect(value).toEqual([1, 2, 3, 4, 5]);
  });

  it('should return the product of the array\'s items', async () => {
    const value = await page.evaluate(() => reduceProduct([1, 2, 3, 4, 5]));
    expect(value).toEqual(120);
  });
});
