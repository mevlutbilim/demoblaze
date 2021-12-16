///<reference types="cypress"/>
import * as user from "../fixtures/users.json"

context('Api testing',function(){
    // cy.request(method, url, body)
    it('Should verify entries endpoint',function(){
        cy.request('GET','https://api.demoblaze.com/entries').then(response=>{
            //assertion for status code
            expect(response.status).to.eql(200);
            response.body.Items.forEach(item => {
                //I am assuming that title and id are required fields of given dataType
                //and doing assertions accordingly
                //if one of the below comes back as wrong datatype or null testCase will fail
                assert.isString(item.title);
                assert.isNumber(item.id);
            });
        });
    });

    it('Should verify pagination endpoint',function(){
        //from my experience I have not seen post being implemented as an http method
         //for pagination, possible improvement
        cy.request(
            {method:'POST', 
            url:'https://api.demoblaze.com/pagination', 
            body:{"id":10}
        }).then(response=>{
            //assertion for status code
            expect(response.status).to.eql(200);
            expect(response.body.Items.length).to.eql(5);
            response.body.Items.forEach(item => {
                //I have seen there are 15 items in total,so afterid 10 I should get 5 items
                //I am assuming that title and id are required fields of given dataType
                //and doing assertions accordingly
                //if one of the below comes back as wrong datatype or null testCase will fail
                assert.isString(item.title);
                assert.isNumber(item.id);
            });
        });
    });

    it('Should verify pagination endpoint', function(){
        //pagination relies on ids, and id is a number type, on BE/api level they didn't put validation
        //for typeCasting
        cy.request('POST', 'https://api.demoblaze.com/pagination', {"id":true}).then(response=>{
            //assertion for status code
            expect(response.status).to.eql(200);
            expect(response.body.Items.length).to.eql(9);
        });
    });

    it('Should verify signup endpoint', function(){
        cy.request('POST','https://api.demoblaze.com/signup', user)
            .then(response=>{
                expect(response.status).eql(200)
            })
    });

   
    it('Should verify deletecart endpoint', function(){
        cy.request('POST','https://api.demoblaze.com/deletecart',{cookie: "user=0ee1fa92-f765-8347-a89c-35c75aebaaf7"})
            .then(response=>{
                expect(response.body).eql("Item deleted.")
                expect(response.status).to.eql(200)
            })
    });

    it('Should verify view endpoint', function(){
        cy.request('POST','https://api.demoblaze.com/view',{"id":1})
            .then(response=>{
                expect(response.status).to.eql(200)
                console.log(response.body)
            })
    });

    
    it('Should verify login endpoint', function(){
        cy.request('POST','https://api.demoblaze.com/login',{username: "blazeme", password: "YmxhemUxMjNr"})
            .then(response=>{
                expect(response.body.errorMessage).eql("Wrong password.")
                expect(response.status).to.eql(200)
            })
    });

    it('Should verify login endpoint with negative senario', function(){
        cy.request('POST','https://api.demoblaze.com/login',{username: "blazemeqq", password: "YXNkZmdo"})
            .then(response=>{
                expect(response.body.errorMessage).eql("User does not exist.")
                expect(response.status).to.eql(200);
            });
    });
    
    
    it('Should verify addcart endpoint', function(){
        cy.request('POST','https://api.demoblaze.com/addtocart',{id: "3830c742-57d8-564a-5f2d-5e9e597c7075", cookie: "user=0ee1fa92-f765-8347-a89c-35c75aebaaf7"})
            .then(response=>{
    
                expect(response.status).to.eql(200);
            });
    });

    it('Should verify bycat endpoint', function(){
        cy.request('POST','https://api.demoblaze.com/bycat',{cat: "notebook"})
            .then(response=>{
    
                expect(response.status).to.eql(200);
                expect(response.body.Items.length).to.eql(6)
            });
    });

});