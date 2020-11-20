const { DEBIT_REQUEST_URL, GENERATE_RANDOM_STRING } = require('../config');

describe('DEBIT REQUEST SPEC', () => {
  const phone = GENERATE_RANDOM_STRING(11, 'number');
  it(`DEBIT REQUEST SUCCESS`, () => {
    cy.request({
      method: 'POST',
      url: DEBIT_REQUEST_URL,
      failOnStatusCode: false,
      body: {
        id_account: 1,
        id_debit_status: 1,
        amount: 12000,
        note: 'ABC',
      },
    })
      .its('status')
      .should('equal', 200);
  });
});
