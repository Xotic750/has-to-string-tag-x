import hasSymbols from 'has-symbol-support-x';
import isSymbol from 'is-symbol';
/**
 * Indicates if `Symbol.toStringTag`exists and is the correct type.
 * `true`, if it exists and is the correct type, otherwise `false`.
 *
 * @type boolean
 */

export default hasSymbols &&
/* eslint-disable-next-line compat/compat */
isSymbol(Symbol.toStringTag);

//# sourceMappingURL=has-to-string-tag-x.esm.js.map