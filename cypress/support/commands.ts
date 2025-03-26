/// <reference types="cypress" />

import '@testing-library/cypress/add-commands';

Cypress.Commands.add('getByData', (seletor: string) => {
  return cy.get(`[data-test=${seletor}]`);
});
