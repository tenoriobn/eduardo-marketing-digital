describe('Home Page', () => {
  it('should visit the home page', () => {
    cy.visit('/');

    cy.findByRole('link', { name: 'Início' }).should('be.visible');
  });
});


