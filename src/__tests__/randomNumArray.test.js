import randomNumArray from '../mathFunctions/randomNumArray';

test('returns an array containing 2 numbers between 0 and 99', () => {
    const nums = randomNumArray(2);
    expect(nums.length).toBe(2);
    expect(nums[0]).toBeLessThan(100);
    expect(nums[0]).toBeGreaterThanOrEqual(0);
    expect(nums[1]).toBeLessThan(100);
    expect(nums[1]).toBeGreaterThanOrEqual(0);
});

test('returns an array containing 3 numbers between 0 and 99', () => {
  const nums = randomNumArray(3);
  expect(nums.length).toBe(3);
  expect(nums[0]).toBeLessThan(100);
  expect(nums[0]).toBeGreaterThanOrEqual(0);
  expect(nums[1]).toBeLessThan(100);
  expect(nums[1]).toBeGreaterThanOrEqual(0);
  expect(nums[2]).toBeLessThan(100);
  expect(nums[2]).toBeGreaterThanOrEqual(0);
});