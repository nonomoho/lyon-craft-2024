import { dataSelector } from '../../../selector.fixture';

describe('Commandes empty', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/commandes', []).as('commandes');
    cy.intercept('GET', '/lyon-craft-2024/crepes', []);
    cy.visit('/commandes');
    cy.wait('@commandes');
  });

  it('should not display table when commande list is empty', () => {
    cy.get(dataSelector('commandes.table')).should('not.exist');
  });
});

describe('Commandes', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/commandes', { fixture: 'commandes.json' }).as('commandes');
    cy.visit('/commandes');
    cy.wait('@commandes');
  });

  it('should display title', () => {
    cy.get(dataSelector('commandes.title')).should('exist');
  });

  it('should display table when "commande"', () => {
    cy.get(dataSelector('commandes.table')).should('exist');
    cy.get(dataSelector('commandes.table.row')).should('have.length', 2);
  });
});
