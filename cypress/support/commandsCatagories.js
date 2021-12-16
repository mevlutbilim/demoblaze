///<reference types="cypress"/>

Cypress.Commands.add('goToPhones',()=>{
    cy.goToHome()
    const phones = cy.get('[class="list-group"] :nth-child(2)')
    phones.click()
})

Cypress.Commands.add('goToLaptops',()=>{
    cy.goToHome()
    const laptops = cy.get('[class="list-group"] :nth-child(3)')
    laptops.click()
})

Cypress.Commands.add('goToMonitors',()=>{
    cy.goToHome()
    const monitors = cy.get('[class="list-group"] :nth-child(4)')
    monitors.click()
    
})
