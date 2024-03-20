describe('Add commande', () => {
  beforeEach(() => {
    cy.intercept("GET", "/lyon-craft-2024/crepes", { fixture: "crepes.json" }).as("crepes");
    cy.visit('/commandes/add');
    cy.wait('@crepes');
  });

  it('should have 3 crepes in list', () => {
    cy.get('[data-selector="add-commande.form.crepes"]').should('exist');

    cy.get('[data-selector="add-commande.form.crepes.option"]').should('have.length', 3);
  });
});
