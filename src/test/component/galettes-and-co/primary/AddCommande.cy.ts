import { CommandeJson } from '../../../../main/webapp/app/galette-and-co/secondary/CommandeJson';
import { dataSelector } from '../../selector.fixture';

describe('Add "commande"', () => {
  beforeEach(() => {
    cy.intercept('GET', '/lyon-craft-2024/crepes', { fixture: 'crepes.json' }).as('crepes');
    cy.intercept('GET', '/lyon-craft-2024/commandes', []);
    cy.visit('/commandes/add');
    cy.wait('@crepes');
  });

  it('should have 4 "crepes" in list', () => {
    cy.get(dataSelector('add-commande.form.crepes')).should('exist');

    cy.get(dataSelector('add-commande.form.crepes.option')).should('have.length', 4);
  });

  it('should create a "commande" and redirect to the "commande" list', () => {
    cy.intercept('POST', '/lyon-craft-2024/commandes/create', {}).as('create');
    cy.get(dataSelector('add-commande.form.client.name')).type('Name');
    cy.get(dataSelector('add-commande.form.crepes')).select([1, 4]);

    const fakeCommande: CommandeJson = {
      client: {
        nom: 'Name',
        numero: '',
      },
      crepes: [
        {
          id: 1,
          price: 3,
          ingredients: ['chocolat'],
        },
        {
          id: 4,
          price: 3,
          ingredients: ['caramel'],
        },
      ],
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
