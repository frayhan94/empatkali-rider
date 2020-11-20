const { DEBIT_STATUS_URL } = require('../config');

describe('DEBIT STATUS SPEC', () => {
  it(`DEBIT STATUS SUCCESS`, () => {
    cy.request({
      method: 'POST',
      url: DEBIT_STATUS_URL,
      failOnStatusCode: false,
      body: {
        name: 'REJECTED',
      },
    })
      .its('status')
      .should('equal', 200);
  });
});
