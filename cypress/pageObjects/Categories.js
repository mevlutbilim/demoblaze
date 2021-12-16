class Category{
    goToPhones(){
        
        return cy.get('[onclick="byCat("phone")"]')
    }

    goToLaptops(){

        return cy.get('[onclick="byCat("notebook")"]')
    }

    goToMonitors(){

        return cy.get('[onclick="byCat("monitor")"]')
    }
}