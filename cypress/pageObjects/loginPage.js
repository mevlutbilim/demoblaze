export class LogInPage{
    visit(){
        cy.visit('/')
    }

    fillUserName(value){
        const field = cy.get('#loginusername')
        field.clear()
        field.type(value)

        return this
    }

    fillPassword(value){
        const field = cy.get('#loginpassword')
        field.clear()
        field.type(value)

        return this
    }

    submit(){
        const button = cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
        button.click()
    }
}
export default LogInPage