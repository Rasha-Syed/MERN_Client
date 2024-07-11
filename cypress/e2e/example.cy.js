//this is where I'll write e2e test
describe('Open Home Page',()=> {
    it('Open Home Page',()=>{
        cy.visit('/')  //to visit a url
        cy.contains('Welcome')  //if a text is present in the document
        cy.contains('Register')
        cy.contains('Login')
    })
})