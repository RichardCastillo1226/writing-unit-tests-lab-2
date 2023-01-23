const exercises = require('./exercises');

test('Question 1: octalToDecimal', () => {
  expect(exercises.octalToDecimal('1')).toEqual(1);
  expect(exercises.octalToDecimal('10')).toEqual(8);
  expect(exercises.octalToDecimal('130')).toEqual(88);
  expect(exercises.octalToDecimal('17')).toEqual(15);
  expect(exercises.octalToDecimal('2047')).toEqual(1063);
  expect(exercises.octalToDecimal('11')).toEqual(9);
});

test('Question 2: anagram', () => {
  expect(exercises.anagram('listen', ['enlists', 'google', 'inlets', 'banana'])).toEqual([ "inlets" ]);
  expect(exercises.anagram('listen', ['enlist', 'google', 'inlets', 'banana'])).toEqual([ "enlist", "inlets" ]);
});

test('Question 3: triangle', () => {
  expect(exercises.triangle(60, 70, 50)).toBe("acute");
  expect(exercises.triangle(30, 90, 60)).toBe("right");
  expect(exercises.triangle(120, 50, 10)).toBe("obtuse");
  expect(exercises.triangle(0, 90, 90)).toBe("invalid");
  expect(exercises.triangle(50, 50, 50)).toBe("invalid");
});

test('Question 4: fridayThe13ths', () => {
  expect(exercises.fridayThe13ths(1986)).toBe(1);
  expect(exercises.fridayThe13ths(2015)).toBe(3);
  expect(exercises.fridayThe13ths(2017)).toBe(2);
});
