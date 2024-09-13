/// <reference types="cypress"/>

describe('Esperas...', () => {

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })


    it.only('Deve aguardar elemento está disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona!!')
    });




})