/// <reference types="cypress"/>

describe('Cypress basics', () => {
    it('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        //aqui pegando o titulo conferindo e vendo se contem um nome no titulo duas acertivas
        cy.title().should('be.equal', 'Campo de Treinamento').should('contain', 'Campo').debug()
    });


    
    it('Should find and interact whit an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html');

        //aqui pegando um botão e clicando
        cy.get('#buttonSimple').click()
        //fazendo a acertiva
        cy.get('#buttonSimple').should('have.value', 'Obrigado!')
    });
})