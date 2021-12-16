///<reference types="cypress"/>
import Header from './Headers'
import LogInPage from './Login'


class HomePage {
    constructor(){
        this.header=new Header()
    }

    visit(){
        cy.visit('/')
    }

    gotoLogIn(){
        const link=this.header.getLogInLink()
        link.click()

        const logIn = new LogInPage()
        return logIn
    }

    gotoLogOut(){
        const logOut = this.header.getLogOutLink()
        
        return logOut.click()
    }

}

export default HomePage