///<reference types="cypress"/>


context('Should be login ',()=>{

    before('navigate to login page',()=>{
        cy.visit('/')
    })
    //using App Actions. Resusable, readable and less code
    it.only('should be login',()=>{
        cy.logIn(Cypress.env('userName'),Cypress.env('paswoord'))
        
    })
    //no App Actions
    it.skip('should be login',()=>{
        cy.get('#login2').click()
        cy.get('#loginusername').type(Cypress.env('userName'))
        cy.get('#loginpassword').type(Cypress.env('password'))
        const login = cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        login.click()
        
    })
    

})