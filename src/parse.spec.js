import { parseComponent, parseIntent, parseFragment  } from './parse.js';

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

  it('should parse a fragment string', function () {

    const intent = 'user.offboard.user';

    const fragment1 = 'bs=testbs&intent='+intent+'&bs2=testbs2';
    const fragment2 = 'intent='+intent+'&bs2=testbs2';
    const fragment3 = 'bs=testbs&bs2=testbs2&intent='+intent;
    const fragment4 = 'bs=testbs&bs2=testbs2';

    expect(parseFragment(fragment1)).toEqual(intent);
    expect(parseFragment(fragment2)).toEqual(intent);
    expect(parseFragment(fragment3)).toEqual(intent);
    expect(parseFragment(fragment4)).toEqual(null);

  });

});
