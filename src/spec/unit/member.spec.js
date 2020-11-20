/* eslint-disable no-param-reassign */
/* global describe it */
const Member = require('../../src/controller/member');

const { save, get, update, updatePassword } = Member;
describe('Member tests ', () => {
  beforeEach(function() {});
  it('should return success when posting new user', async function() {
    const payload = {
      email: 'somebody@gmail.com',
      password: '12121',
      phone: '9218281828',
    };
    const result = await save(payload);
    expect(result).toBe(true);
    /* assert.isNotNull(result, 'should be Not Null'); */
  });
});
