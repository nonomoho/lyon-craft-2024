describe('Commandes empty', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/commandes', []).as('commandes');
    cy.intercept('GET', '/lyon-craft-2024/crepes', []);
    cy.visit('/commandes');
    cy.wait('@commandes');
  });

  it('should not display table when commande list is empty', () => {
    cy.get('[data-selector="commandes.table"]').should('not.exist');
  });

  it('should redirect to add commande form when clicking on add button', () => {
    cy.get('[data-selector="commandes.add"]').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/commandes/add');
  });
});

describe('Commandes', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/commandes', { fixture: 'commandes.json' }).as('commandes');
    cy.visit('/commandes');
    cy.wait('@commandes');
  });

  it('should display title', () => {
    cy.get('[data-selector="commandes.title"]').should('exist');
  });

  it('should display table when commande', () => {
    cy.get('[data-selector="commandes.table"]').should('exist');
    cy.get('[data-selector="commandes.table.row"]').should('have.length', 2);
  });

  it('sould display client name', () => {
    cy.get('[data-selector="commandes.table.row"]')
      .first()
      .find('[data-selector="commandes.table.row.client-name"]')
      .should('contain', 'nom');
  });
});
