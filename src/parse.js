import 'core-js/fn/array/find';
import { compose, split } from './utils.js';


export {
  parseIntent,
  parseComponent,
  parseFragment
};

function parseIntent (state) {

  const intentParts = intent => split('.', intent);

  const intentObject = parts => ({
    actor: parts[0],
    action: parts[1],
    object: parts[2] || parts[0]
  });

  return compose(intentObject, intentParts)(state);
}

function parseComponent (component) {

  const componentParts = component => split('_', component);

  return compose(componentParts)(component);
}

function parseFragment (fragment) {

  const fragmentParts = fragment => split('&', fragment);

  const intentPart = fragmentParts => fragmentParts.find(part => (/^intent\=/).test(part));

  const intentValue = fragmentPart => fragmentPart ? split('=', fragmentPart)[1]: null;

  return compose(intentValue, intentPart, fragmentParts)(fragment);
}
