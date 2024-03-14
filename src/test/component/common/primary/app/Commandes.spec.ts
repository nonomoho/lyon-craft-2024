describe('Commandes', () => {
  it('should display title', () => {
    cy.intercept("GET", "/lyon-craft-2024/commandes", { fixture: "commandes.json" }).as("commandes");
    cy.visit('/commandes');
    cy.wait('@commandes');

    cy.get('[data-selector="commandes-title"]').should('exist');
  });

  it('should not display table when commande list is empty', () => {
    cy.intercept("GET", "/lyon-craft-2024/commandes", []).as("commandes");
    cy.visit('/commandes');
    cy.wait('@commandes');

    cy.get('[data-selector="commandes-table"]').should('not.exist');
  });

  it('should display table when commande', () => {
    cy.intercept("GET", "/lyon-craft-2024/commandes", { fixture: "commandes.json" }).as("commandes");
    cy.visit('/commandes');
    cy.wait('@commandes');

    cy.get('[data-selector="commandes-table"]').should('exist');
    cy.get('[data-selector="commandes-table-row"]').should('have.length', 2);
  });
});
