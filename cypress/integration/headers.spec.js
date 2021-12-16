///<reference types="cypress"/>
import *as user from "../fixtures/users.json"
import *as header from "../fixtures/headers.json"

describe('Verify Headers',()=>{
    before('Before each case login',()=>{
        cy.visit('/')
    })
    it('Should verify Home text',()=>{
        cy.goToHome()
          .should('have.text',header.home)
    })

    it('Should verify Contact text',()=>{
        cy.goToContact()
          .should('contain.text',header.contact)
    })

    it('Should verify About us text',()=>{
        cy.goToAboutUs()
          .should('contain.text',header.aboutUs)
    })

    it('Should verify Cart text',()=>{
        cy.goToCart()
          .should('contain.text',header.cart)
    })

    it('Should verify Log in text',()=>{
        cy.goToLogIn()
        .should('contain.text',header.logIn)
    })

    it('should be login',()=>{
        cy.logIn(user.name,user.password)
        cy.get('#nameofuser')
          .should('contain.text','')
        
    })
 
    it('should verify Phones text',()=>{
        cy.goToPhones()
        .should('contain.text',header.phones)
    })
    it('should verify Laptops text',()=>{
        cy.goToLaptops()
        .should('contain.text',header.laptops)
    })

    it('should verify Monitors text',()=>{
        cy.goToMonitors()
        .should('contain.text',header.monitors)
    })

    it('Should verify Sign up text',()=>{
        cy.goToSignUp()
        .should('contain.text',header.signUp)
    })
});
