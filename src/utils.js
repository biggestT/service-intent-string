const compose = (...args) => (initial) => args.reduceRight(
  (result, fn) => fn(result),
  initial
);
const split = (separator, string) => string.split(separator);

export { compose, split };
