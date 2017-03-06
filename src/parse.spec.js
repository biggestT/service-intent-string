import { parseComponent, parseIntent  } from './parse.js';

describe('service-intent-string', function () {

  it('should parse an intent', function () {

    const intent = 'user.view.company_829839';

    const {
      actor,
      action,
      object
    } = parseIntent(intent);

    expect(actor).toEqual('user');
    expect(action).toEqual('view');
    expect(object).toEqual('company_829839');

  });

  it('should parse an intent object component', function () {

    const component = 'user_non-paying_123';

    const [type, category, id] = parseComponent(component);

    expect(type).toEqual('user');
    expect(category).toEqual('non-paying');
    expect(id).toEqual('123');

  });

});
