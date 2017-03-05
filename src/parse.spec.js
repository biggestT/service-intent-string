import { parse } from './parse.js';

describe('service-intent-string', function () {

  it('should parse an intent', function () {

    const intent = 'user.view.company_829839';

    const [
      [actorType, actorKey],
      [state],
      [objectType, objectKey]
    ] = parse(intent);

    expect(actorType).toEqual('user');
    expect(actorKey).toBe(undefined);
    expect(state).toEqual('view');
    expect(objectType).toEqual('company');
    expect(objectKey).toEqual('829839');

  });

});
