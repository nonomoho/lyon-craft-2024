import { CommandeJson } from '../../../../../main/webapp/app/galette-and-co/secondary/CommandeJson';
import { dataSelector } from '../../../selector.fixture';

describe('Add "commande"', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/crepes', { fixture: 'crepes.json' }).as('crepes');
    cy.intercept('GET', '/lyon-craft-2024/commandes', []);
    cy.visit('/commandes/add');
    cy.wait('@crepes');
  });

  it('should have 3 "crepes" in list', () => {
    cy.get(dataSelector('add-commande.form.crepes')).should('exist');

    cy.get(dataSelector('add-commande.form.crepes.option')).should('have.length', 3);
  });

  it('should create a "commande" and redirect to the "commande" list', () => {
    cy.intercept('POST', '/lyon-craft-2024/commandes/create', {}).as('create');
    cy.get(dataSelector('add-commande.form.client.name')).type('Name');
    const fakeCommande: CommandeJson = {
      client: {
        nom: 'Name',
        numero: '',
      },
      crepes: [],
      galettes: [],
      heureDeRetrait: '12:00',
    };
    cy.get(dataSelector('add-commande.create')).click();

    cy.wait('@create').then(interception => {
      expect(interception.request.url).to.contain('/lyon-craft-2024/commandes/create');

      expect(interception.request.body.client.nom).to.equals(fakeCommande.client.nom);
    });

    cy.url().should('eq', Cypress.config().baseUrl + '/commandes');
  });
});
