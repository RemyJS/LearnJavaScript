const { calc, createRpn } = require('./index.js');

describe('resualts', () => {
  test('1 + 2 * 3 to equal 7', () => {
    expect(calc('1 + 2 * 3')).toBe(7);
  })
  test('(50 - 25) / (7 - 2) to equal 5', () => {
    expect(calc('(50 - 25) / (7 - 2)')).toBe(5);
  })
  test('50 - 25/ 7 - 2 to equal 5', () => {
    expect(calc('(50 - 25) / (7 - 2)')).toBe(5);
  })
  test('77 + 79 / 25 * (  64 * 63 - 89 * 14  ) * 49 to equal 5', () => {
    expect(calc('77 + 79 / 25 * (  64 * 63 - 89 * 14  ) * 49')).toBe(431461.24);
  })
  test('50 - 25/ 7 - 2 to equal 5', () => {
    expect(calc('(50 - 25) / (7 - 2)')).toBe(5);
  })
  test('- 2 * 4 to equal -8', () => {
    expect(calc('- 2 * 4 ')).toBe(-8);
  })
});

describe('Reverse Polish notation', () => {
  test('1+2*3 to equal 1  2  3 * +', () => {
    expect(createRpn('1+2*3')).toBe("1 2 3 * +");
  })
  test('(50-25)/(7-2) to equal 50 25 - 7 2 - /', () => {
    expect(createRpn('(50-25)/(7-2)')).toBe("50 25 - 7 2 - /");
  })
  test('50-25/7-2 to equal 50 25 7 / - 2 -', () => {
    expect(createRpn('50-25/7-2')).toBe("50 25 7 / - 2 -");
  })
  test('29 + 67 - 22 * (  (  (  98 + 90 * 90 + 81 - 83  ) * 92 - 79 + 37  ) * 20 - 60  ) to equal 29 67 + 22 98 90 90 * + 81 + 83 - 92 * 79 - 37 + 20 * 60 - * -', () => {
    expect(createRpn('29 + 67 - 22 * (  (  (  98 + 90 * 90 + 81 - 83  ) * 92 - 79 + 37  ) * 20 - 60  )')).toBe("29 67 + 22 98 90 90 * + 81 + 83 - 92 * 79 - 37 + 20 * 60 - * -");
  })
})

