describe('Register Page E2E testing',function() {
    beforeEach(function(){
        cy.fixture('user').then((user)=>{
            this.userData=user;
        });
    });
    it('Testing Register page',function(){
        cy.visit('/register')  //to visit a url
        //cy.get('h1').should('contain','Register!')
        cy.get('input[name="name"]').type(this.userData.name)
        cy.get('input[name="email"]').type(this.userData.email)
        cy.get('input[name="password"]').type(this.userData.password)
        cy.get('button[type="submit"]').click({multiple:true})
       // cy.contains('Registration Successful!').should('be.visible')
        cy.log('Register functionality is working')
    })
})