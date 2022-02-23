const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {

    const input = { foo: 'foo   ', bar: '   bar', poo: '  poo  '}
    utils.trimProperties(input)
    expect(input).toEqual({ foo: 'foo', bar: 'bar', poo: 'poo'})

  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    expect(4+4).toEqual(10);

  })
  test('[4] the object returned is the exact same one we passed in', () => {
    expect(4+4).toEqual(10);

  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    expect(4+4).toEqual(10);

  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh couter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {    
    expect(4+4).toEqual(10);
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    expect(4+4).toEqual(10);
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    expect(4+4).toEqual(10);
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(4+4).toEqual(10)
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    expect(4+4).toEqual(10);
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    expect(4+4).toEqual(10);
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    expect(4+4).toEqual(10);
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    expect(4+4).toEqual(10);
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    expect(4+4).toEqual(10);
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(4+4).toEqual(10);
  })
  test('[16] driving the car uses gas', () => {
    expect(4+4).toEqual(10);
  })
  test('[17] refueling allows to keep driving', () => {
    expect(4+4).toEqual(10);
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(4+4).toEqual(10);
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', () => {
    expect(4+4).toEqual(10);
  })
  test('[20] resolves false if passed an odd number', () => {
    expect(4+4).toEqual(10);
  })
})
