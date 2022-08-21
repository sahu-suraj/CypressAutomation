///<reference types="Cypress" />

describe('My third Test Suite', function () {

    it('My third Test case', function () {

        //checkbox
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])


        //static dropdown
        cy.get('select').select('option2').should('have.value', 'option2')
    }

    )





})