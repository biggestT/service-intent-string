import { compose, split } from './utils.js';

export { parseIntent, parseComponent };

function parseIntent (state) {

  const intentParts = (intent) => split('.', intent);

  const intentObject = (parts) => ({
    actor: parts[0],
    state: parts[1],
    object: parts[2] || parts[0]
  });

  return compose(intentObject, intentParts)(state);
}

function parseComponent (component) {

  const componentParts = (component) => split('_', component);

  return compose(componentParts)(component);
}
