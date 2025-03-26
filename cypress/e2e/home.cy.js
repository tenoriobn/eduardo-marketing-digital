describe('Home Page', () => {
  it('should visit the home page', () => {
    cy.visit('/');

    cy.findByRole('heading', { name: 'Hello, Next.js! 2025' }).should('be.visible');
  });
});
