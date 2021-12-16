///<reference types="cypress"/>

import *as product  from "../fixtures/catagories.json"
import *as phone_price from "../fixtures/phonePrices.json"
import *as laptop_price from "../fixtures/laptopPrices.json"
import *as monitor_price from "../fixtures/monitorPrices.json"

describe('Test Suite -> Verify Products and Prices ', function(){

    before('Goto home page',()=>{
        cy.visit('/')
    })
    
   it('Should verify Products quantity',()=>{
       cy.get('[class="list-group"] [id="itemc"]')
       .each((item,index,list)=>{
           expect(list).have.to.length(3)
       })
   })

   it('Should verify Products catagory list',()=>{
       const catList = product.catagories
       cy.get('[class="list-group"] [id="itemc"]')
         .each((item,index,list)=>{
           cy.wrap(item).should('contain.text',catList[index])
        });
    });

    it('Should verify Phones quantity',()=>{
        cy.goToPhones()
        cy.get('.card > .card-block > .card-title > .hrefch')
          .each((item,index,list)=>{
            expect(list).have.to.length(7)
        })
    })

    it('Should verify Phone products list',()=>{
        const phoneList = product.Phones

        cy.goToPhones()
        cy.get('.card > .card-block > .card-title > .hrefch')
          .each((item,index,list)=>{
            cy.wrap(item).should('contain.text',phoneList[index])
          })
    })

    it('Should verify Laptop quantity',()=>{
        cy.goToLaptops()
        cy.get('.card > .card-block > .card-title > .hrefch')
          .each((item,index,list)=>{
            expect(list).have.to.length(6)
        })
    })

    it('Should verify Laptop products list',()=>{
        const laptopList = product.Laptops

        cy.goToLaptops()
        cy.get('.card > .card-block > .card-title > .hrefch')
          .each((item,index,list)=>{
            cy.wrap(item).should('contain.text',laptopList[index])
          })
          
    })
    it('Should verify Monitors quantity',()=>{
        cy.goToMonitors()
        cy.get('.card > .card-block > .card-title > .hrefch')
          .each((item,index,list)=>{
            expect(list).have.to.length(2)
        })
    })

    it('Should verify Monitor products list',()=>{
        const monitorList = product.Monitors

        cy.goToMonitors()
        cy.get('.card > .card-block > .card-title > .hrefch')
          .each((item,index,list)=>{
            cy.wrap(item).should('contain.text',monitorList[index])
          }) 
    })

    it('Should verify Samsung galaxy s6  price',()=>{
        cy.goToPhones()
        cy.get(':nth-child(1) > .card > .card-block > h5')
            .should('contain',phone_price["Samsung galaxy s6"])
    })
    
    it('Should verify MacBook Pro privce',()=>{
        cy.goToLaptops()
        cy.get(':nth-child(6) > .card > .card-block > h5')
            .should('contain',laptop_price["MacBook Pro"])
    })

    it('Should verify Apple monitor 24 privce',()=>{
        cy.goToMonitors()
        cy.get(':nth-child(1) > .card > .card-block > h5')
            .should('contain',monitor_price["Apple monitor 24"])
    })

});