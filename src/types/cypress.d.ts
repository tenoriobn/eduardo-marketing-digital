// cypress.d.ts
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      getByData(seletor: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
