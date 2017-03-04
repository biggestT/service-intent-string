import { Parser } from './parser.js';

describe('service-intent-string', function () {

  var MOCK = {
    userViewCompany: 'user.view.company_829839',
    adminConfigUser: 'administrator_29.configure.user_294382',
    userPayInvoice: 'user_3291.pay.invoice_432432'
  };

  it('should get subject', function () {

    expect(Parser().actor(MOCK.userViewCompany)).toEqual('user');
    expect(Parser().actor(MOCK.adminConfigUser)).toEqual('administrator_29');
    expect(Parser().actor(MOCK.userPayInvoice)).toEqual('user_3291');

  });

});
