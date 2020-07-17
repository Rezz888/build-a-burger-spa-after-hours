describe('Testing the Build a burger form', () => {
    it('Form functions properly', () => {
        cy.visit('/buildaburger');

        cy.get('[data-cy="name"]')
        .type('bob')
        .should('have.value', 'bob');

        cy.get('[data-cy="submit-button"]').should('be.disabled');

        cy.get('[data-cy="phone"]').type('0123456789').should('have.value', '0123456789');

        cy.get('[data-cy="submit-button"]').should('not.disabled');

        cy.get('[data-cy="bun"]').select('Sesame Seed').should('have.value', 'Sesame Seed');

        cy.get('[data-cy="ketchup"]').click().should('be.checked');
        cy.get('[data-cy="mustard"]').click().should('be.checked');
        cy.get('[data-cy="mayonaise"]').click().should('be.checked');
        cy.get('[data-cy="barbecue"]').click().should('be.checked');
        cy.get('[data-cy="cheese"]').click().should('be.checked');
        cy.get('[data-cy="bacon"]').click().should('be.checked');
        cy.get('[data-cy="lettuce"]').click().should('be.checked');
        cy.get('[data-cy="onion"]').click().should('be.checked');

        cy.get('[data-cy="instructions"]').type('Yo, this is a test.').should('have.value', 'Yo, this is a test.');
    })
})