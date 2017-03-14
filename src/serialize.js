import { compose } from './utils.js';

export { serializeComponent, serializeIntent };

function serializeIntent (intent) {

  const intentString = (obj) => `${obj.actor}.${obj.action}.${obj.object || obj.actor}`;

  return compose(intentString)(intent);

}

function serializeComponent (component) {

  const componentString = (arr) => arr.join('_');

  return compose(componentString)(component);

}
