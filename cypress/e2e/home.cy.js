describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should start at the beginning of the landing page', () => {
    cy.get('.active').contains('Início');
    cy.get('#inicio').find('h2').should('exist').and('be.visible');
  });

  describe('Menu', () => {
    beforeEach(() => {
      cy.fixture('menuLinks').as('menuLinks');
    });

    it('should render menu links correctly', function () {
      cy.get('nav').find('a').should('have.length', this.menuLinks.links.length);

      this.menuLinks.links.forEach(({ label }) => {
        cy.get('nav').contains('a', label).should('be.visible');
      });
    });

    it('should scroll to the correct section on menu link click', function () {
      this.menuLinks.links.forEach(({ label, url }) => {
        cy.get('nav').contains('a', label).click();

        cy.get(url).should('exist').and('be.visible');
      });
    });
  });
});
