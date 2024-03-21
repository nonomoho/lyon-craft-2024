import { CommandeJson } from '../../../../../main/webapp/app/common/secondary/CommandeJson';

describe('Add commande', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/crepes', { fixture: 'crepes.json' }).as('crepes');
    cy.intercept('GET', '/lyon-craft-2024/commandes', []);
    cy.visit('/commandes/add');
    cy.wait('@crepes');
  });

  it('should have 3 crepes in list', () => {
    cy.get('[data-selector="add-commande.form.crepes"]').should('exist');

    cy.get('[data-selector="add-commande.form.crepes.option"]').should('have.length', 3);
  });

  it('should create a commande and redirect to the command list', () => {
    cy.intercept('POST', '/lyon-craft-2024/commandes/create', {}).as('create');
    cy.get('[data-selector="add-commande.form.client.name"]').type('Name');
    const fakeCommande: CommandeJson = {
      client: {
        nom: 'Name',
        numero: '',
      },
      crepes: [],
      galettes: [],
      heureDeRetrait: '12:00',
    };
    cy.get('[data-selector="add-commande.create"]').click();

    cy.wait('@create').then(interception => {
      expect(interception.request.url).to.contain('/lyon-craft-2024/commandes/create');

      expect(interception.request.body.client.nom).to.equals(fakeCommande.client.nom);
    });

    cy.url().should('eq', Cypress.config().baseUrl + '/commandes');
  });
});
