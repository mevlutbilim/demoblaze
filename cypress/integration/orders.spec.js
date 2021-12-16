///<reference types="cypress"/>
import *as price_monitors from "../fixtures/monitorPrices.json"
import *as price_phones from "../fixtures/phonePrices.json"
import *as product from "../fixtures/catagories.json"


describe('Test Suite-> Orders',()=>{
    before('home page',()=>{
        cy.visit('/')
    
    })

    it('Should be verify total price in the cart',()=>{
        cy.goToPhones()
        //samsung
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        const addToCart = cy.get('.col-sm-12 > .btn')
        addToCart.click()
        cy.goToHome()  
        //iphone
        cy.get(':nth-child(5) > .card > :nth-child(1) > .card-img-top').click()
        const addToCart1 = cy.get('.col-sm-12 > .btn')
        addToCart1.click()
        cy.goToCart().click()

        const test_total = price_phones["Iphone 6 32gb"]+
                           price_phones["Samsung galaxy s6"]

        cy.get('#totalp').should('contain',test_total)
    })

    it('Should add "Samsung galaxy s6" and "Iphone 6 32GB" to the cart',()=>{
        cy.goToPhones()
        //samsung
        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        const addToCart = cy.get('.col-sm-12 > .btn')
        addToCart.click()
        cy.goToHome()  
        //iphone
        cy.get(':nth-child(5) > .card > :nth-child(1) > .card-img-top').click()
        const addToCart1 = cy.get('.col-sm-12 > .btn')
        addToCart1.click()

    })

    it.skip('Should add "Samsung galaxy"',()=>{
        cy.goToPhones()
        //add samsung
        const samsung = product.Phones[0]
        // cy.get('[disabled]').click({force: true})
        cy.get('.card-title >.hrefch')
            .each(($element)=>{
            if($element.hasClass){
    
                cy.wrap($element).should('have.text',samsung).click()
             
                let addToCart = cy.get('.col-sm-12 > .btn')
              addToCart.click()

              cy.goToHome()
            }
        })
        
        cy.goToHome()  

        
    })

    it.skip('Should add ihone to cart ',()=>{
        const iphone = product.Phones[4]
     
        cy.get('.card-title >.hrefch')
            .each(($element)=>{
            if($element.hasClass){
                cy.wrap($element).should('have.text',iphone).click()
             
                let addToCart = cy.get('.col-sm-12 > .btn')
              addToCart.click()

              cy.goToHome()
            }
        })
        
        cy.goToHome()  
    })

    it('Should verify ASUS Full HD price',()=>{
        const test_price =price_monitors["ASUS Full HD"]
        cy.goToMonitors()
        cy.get('.card > .card-block > h5')
            .should('contain',test_price)
    })

    it('Should verify Apple monitor 24 price',()=>{
        const test_price =price_monitors["Apple monitor 24"]
        cy.goToMonitors()
        cy.get('.card > .card-block > h5')
            .should('contain',test_price)
    })

    it('Should verify "iphone 6 32gb" price',()=>{
        const test_price = price_phones["Iphone 6 32gb"]
        cy.goToPhones()
        cy.get(':nth-child(5) > .card > .card-block > h5')
            .should('contain',test_price)
    })

    it('Should verify Nexus 6 price',()=>{
        const test_price = price_phones["Nexus 6"]
        cy.goToPhones()
        cy.get('.card > .card-block > h5')
            .each((element,index,list)=>{
                cy.wrap(element).first(test_price)
            })
    })

    it('Should verify HTC One M9 price',()=>{
        const test_price = price_phones["HTC One M9"]
        cy.goToPhones()
        cy.get('.card > .card-block > h5')
            .each((element,index,list)=>{
                cy.wrap(element).first(test_price)
            })
    })

})