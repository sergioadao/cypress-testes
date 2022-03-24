/// <reference types="cypress" />


describe('Super Testes 01', () => {
    it('Validar Acesso a Pagina Inicial do SUPPER', () =>  {
        cy.visit('https://superbr-test.dth.nuvem.gov.br/auth/login')
        cy.get('.login-form > :nth-child(3)').should('contain', 'TEST-ORACLE')
    })


    it('Clicar NO BOTAO CRIAR NOVA CONTA', () => {
       cy.get('.link').click()

    })


    it('Validar PAGINA DE CADASTRO', () =>  {
        cy.get('#register-form > .title').should('contain', 'REGISTRE-SE')
    })


    it('Preencher CAMPO NOME', () => {
        cy.get('#mat-input-3').type('SICRANO ADMIN')
        cy.get('#mat-input-3').should('have.value', 'FULANO ADMIN')
    })

    it('Preencher CAMPO E-MAIL', () => {
        cy.get('#mat-input-4').type('sicrano@email.com')
        cy.get('#mat-input-4').should('have.value', 'fulano@email.com')
    })

    it('Preencher CAMPO CPF', () => {
        cy.get('#mat-input-5').type('25312165611')
        cy.get('#mat-input-5').should('have.value', '25312165611')
    })


    it('Preencher CAMPO SENHA', () => {
        cy.get('#mat-input-6').type('Me123456')
        cy.get('#mat-input-6').should('have.value', 'Me123456')
    })

    it('Preencher CAMPO CONFIRMAR SENHA', () => {
        cy.get('#mat-input-7').type('Me123456')
        cy.get('#mat-input-7').should('have.value', 'Me123456')
    })



    it('Clicar NO BOTAO CRIAR NOVA CONTA', () => {
       cy.get('form.ng-tns-c239-44 > .mat-focus-indicator').click()

    })


    it('Confirmar CRIAÇÂO DA CONTA', () =>  {
        cy.get('.sub-title').should('contain', 'Cadastro realizado com sucesso!')
    })

})
