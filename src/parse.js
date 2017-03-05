export { parse };

function parse (state) {

  const parts = (separator, string) => string.split(separator);

  const intentParts = (intent) => parts('.', intent);

  const wordParts = (word) => parts('_', word);

  return intentParts(state).map(wordParts);

}


