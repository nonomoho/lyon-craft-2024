import { dataSelector } from '../../selector.fixture';

const getFirstTableRow = () => cy.get(dataSelector('commandes.table.row')).first();

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

  it('should redirect to add commande form when clicking on add button', () => {
    cy.get(dataSelector('commandes.add')).click();

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
    cy.get(dataSelector('commandes.title')).should('exist');
  });

  it('should display table when "commande"', () => {
    cy.get(dataSelector('commandes.table')).should('exist');
    cy.get(dataSelector('commandes.table.row')).should('have.length', 2);
  });

  it('should display table headers', () => {
    cy.get(dataSelector('commandes.table.header.nom')).should('contain', 'Nom');
    cy.get(dataSelector('commandes.table.header.numero')).should('contain', 'Numéro de téléphone');
    cy.get(dataSelector('commandes.table.header.crepes')).should('contain', 'Crêpes');
    cy.get(dataSelector('commandes.table.header.galettes')).should('contain', 'Galettes');
    cy.get(dataSelector('commandes.table.header.heure-de-retrait')).should('contain', 'Heure de retrait');
  });

  it('should display client name', () => {
    cy.get(dataSelector('commandes.table.row')).first().find(dataSelector('commandes.table.row.client.nom')).should('contain', 'nom');
  });

  it('should display client phone number', () => {
    getFirstTableRow().find(dataSelector('commandes.table.row.client.numero')).should('contain', '0685587326');
  });

  it('should display all "crepes" in "commande"', () => {
    getFirstTableRow().find(dataSelector('commandes.table.row.crepe')).should('have.length', 2);
  });

  it('should display a "crepe" for "commande"', () => {
    const crepesOnFirstCommande = () => getFirstTableRow().find(dataSelector('commandes.table.row.crepe'));

    crepesOnFirstCommande().should('have.length', 2);
    crepesOnFirstCommande().first().should('contain', 'price: 2 €, ingredients: sucre/beurre');
    crepesOnFirstCommande().eq(1).should('contain', 'price: 3 €, ingredients: caramel');
  });

  it('should display a "galette" for "commande"', () => {
    const galettesOnFirstCommande = () => getFirstTableRow().find(dataSelector('commandes.table.row.galette'));

    galettesOnFirstCommande().should('have.length', 2);
    galettesOnFirstCommande().first().should('contain', 'price: 4 €, ingredients: oeuf');
    galettesOnFirstCommande().eq(1).should('contain', 'price: 5 €, ingredients: fromage/oeuf');
  });

  it('should display "heure de commande"', () => {
    getFirstTableRow().find(dataSelector('commandes.table.row.heure-de-retrait')).should('contain', '12:30');
  });
});
