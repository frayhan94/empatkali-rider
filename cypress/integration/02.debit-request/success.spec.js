const { ACCOUNT_URL, GENERATE_RANDOM_STRING, DEFAULT_PASSWORD } = require('../config');

describe('REGISTER SUCCESS', () => {
  const phone = GENERATE_RANDOM_STRING(11, 'number');
  it(`REGISTER WITH VALID PAYLOAD POST`, () => {
    cy.request({
      method: 'POST',
      url: ACCOUNT_URL,
      failOnStatusCode: false,
      body: {
        name: 'Rayhan Faris',
        email: 'rayhanfaris@gmail.com',
        profile_image: 'http://rayhanfaris.com',
        phone: phone,
        password: DEFAULT_PASSWORD,
        is_email_confirmed: 'N',
        is_phone_confirmed: 'N',
      },
    })
      .its('status')
      .should('equal', 200);
  });
});
