import hasToStringTag from 'src/has-to-string-tag-x';

describe('basic tests', function() {
  it('results should match', function() {
    expect.assertions(1);
    /* eslint-disable-next-line compat/compat */
    const expected = typeof Symbol === 'function' && typeof Symbol('') === 'symbol' && typeof Symbol.toStringTag === 'symbol';
    expect(hasToStringTag).toStrictEqual(expected);
  });
});
