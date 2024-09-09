/// <reference types="cypress"/>

describe('Wirk with basic elements' , () => {

    before(()=>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Nome')
        //cy.get('span').should('have.value', 'Nome')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    });

    it('Links', () => {
        //posso fazer tanto com o get
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        //ou com o contains procurando no corpo todo pelo nome
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    });

    it.only('TextFields', () => {
        cy.get('#formNome').type('Lucas')
        cy.get('#formNome').should('have.value', 'Lucas')
        cy.get('[data-cy=dataSobrenome]').type('Assis')
        cy.get('[data-cy=dataSobrenome]').should('have.value', 'Assis')
        cy.get('#elementosForm\\:sugestoes').type('Aprendendo Cypress')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'Aprendendo Cypress')


        cy.get('.success').should('not.be.visible')
    
    
    });


})