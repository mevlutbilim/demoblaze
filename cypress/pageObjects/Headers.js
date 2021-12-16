class Header{
    getLogInLink(){

        return cy.get('#login2')
    }

    getLogOutLink(){

        return cy.get('#logout2')
    }

    getCartLink(){
        
        return cy.get('#cartur')
    }

    getHomePageLink(){

        return cy.get('.active > .nav-link')
    }
}

export default Header