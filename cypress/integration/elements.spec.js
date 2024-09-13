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

    it('TextFields', () => {
        cy.get('#formNome').type('Lucas')
        cy.get('#formNome').should('have.value', 'Lucas')
        cy.get('[data-cy=dataSobrenome]').type('Assis')
        cy.get('[data-cy=dataSobrenome]').should('have.value', 'Assis')
        cy.get('#elementosForm\\:sugestoes').type('Aprendendo Cypress')
        cy.get('#elementosForm\\:sugestoes').should('have.value', 'Aprendendo Cypress')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input').type('????')

        cy.get('.success').should('not.be.visible')
    
    
    });

    it('RadioButton', () => {
        cy.get('#formSexoFem').click().should('be.checked')

        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get('[name=formSexo]').should('have.length', 2)
    })

    it('CheckBox', () => {
        cy.get('#formComidaPizza').click().should('be.checked')
        
        cy.get('[name=formComidaFavorita]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')

    })

    it('ComboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
        .select('Mestrado')
        .should('have.value', 'mestrado')


        //TODO Validar as opçoes do combo
    });

    it('ComboMult', () => {
        cy.get('[data-testid=dataEsportes]').select(['Natacao', 'Corrida', 'Nada'])

        //TODO validar opções selecionadas do combo multlipo
    });


})