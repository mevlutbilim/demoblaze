///<reference types="cypress"/>

        //short style
Cypress.Commands.add('logIn',(userName,password)=>{
        cy.get('#login2').click()
        cy.get('#loginusername').type(userName)
        cy.get('#loginpassword').type(password)
        const login = cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        login.click()
})

    //readable style
//  Cypress.Commands.add('logIn',(userName,password)=>{
//     cy.goToHome()
//     cy.goToLogIn().click()
//     const userNameField = cy.get('#loginusername')
//     userNameField.clear()
//     userNameField.type(userName)
//     const paswordField = cy.get('#loginpassword')
//     paswordField.clear()
//     paswordField.type(password)
//     const login = cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
//     login.click()
    
// })
