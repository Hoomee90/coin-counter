import * as script from "../src/script.js";

describe(`toCents`, () => {
  test('exists', () => {
    expect(script.toCents).toBeDefined();
  });

  test('returns int', () => {
    expect(typeof script.toCents()).toEqual("number");
  });

  test('toCents converts dollar amounts to cents', () => {
    expect(script.toCents(4.99)).toEqual(499);
  });
});

describe(`getChange`, () => {
  test('function exists', () => {
    expect(script.getChange).toBeDefined();
  });

  test('returns array-like', () => {
    expect(typeof script.getChange(499)).toEqual("object");
  });

  test('returns empty object on input of zero', () => {
    expect(script.getChange(0)).toEqual({});
  });

  test('returns object with the number of pennies', () => {
    expect(script.getChange(0.04)).toEqual({ penny: 4 });
  });

  test('returns object with the number of nickles and pennies', () => {
    expect(script.getChange(0.08)).toEqual({ nickel: 1, penny: 3 });
  });

  test('returns object with the amount of quarters', () => {
    expect(script.getChange(1.25)).toEqual({ quarter: 5 });
  });

  test('returns object with the full amount of all change', () => {
    expect(script.getChange(4.99)).toEqual({ quarter: 19, dime: 2, penny: 4 });
  });

  test('returns successfully on large numbers', () => {
    expect(script.getChange(4136.12)).toEqual({ quarter: 16544, dime: 1, penny: 2 });
  });
});