describe('Commandes', () => {
  it('should display title', () => {
    cy.visit('/commandes');

    cy.get('[data-selector="commandes-title"]').should('exist');
  });
});
