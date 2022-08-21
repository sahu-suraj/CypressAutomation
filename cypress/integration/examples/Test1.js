//cypress - spec file

///<reference types="Cypress" />

describe('My First Test Suite', function () {

    it('My First Test case', function () {

        //Test steps

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length', 4);
        //cy.get('div.product div img').should('have.length', 4);

        cy.get('.products').as('productLocator');


        //Parent child chaining
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //add to cart
        cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click().then(function () {
            console.log('sf')
        })



        cy.get('@productLocator').find('.product').each(($e1, index, $list) => {

            const textVeg = $e1.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {

                cy.wrap($e1).find('button').click();

            }
        })

        //fetch brand text in print in log
        cy.get('.brand').then(function (logoelement) {
            cy.log(logoelement.text())
        })
        cy.get('.brand').should('have.text', 'GREENKART')





    }

    )





})