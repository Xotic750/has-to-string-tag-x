import hasSymbols from 'has-symbol-support-x';

/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */
export default hasSymbols &&
  /* eslint-disable-next-line compat/compat */
  typeof Symbol.toStringTag === 'symbol';
