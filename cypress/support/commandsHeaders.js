///<reference types="cypress"/>

Cypress.Commands.add('goToHome',()=>{
    cy.get('.active > .nav-link').click()
})

Cypress.Commands.add('goToContact',()=>{
    cy.goToHome()
    cy.get(':nth-child(2) > .nav-link')
})

Cypress.Commands.add('goToAboutUs',()=>{
    cy.goToHome()
    cy.get(':nth-child(3) > .nav-link')
})

Cypress.Commands.add('goToCart',()=>{
    cy.goToHome()
    cy.get('#cartur')
})

Cypress.Commands.add('goToLogIn',()=>{
    cy.goToHome()
    cy.get('#login2')
})

Cypress.Commands.add('goToSignUp',()=>{
    cy.goToHome()
    cy.get('#signin2')

})

