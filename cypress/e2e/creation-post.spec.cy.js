describe('creation new post' , () => {



    it('first scenario valid authentification ' , () => {

        cy.visit('https://react-redux.realworld.io/#/login?_k=2noabt') ; 
         
         // Get input by type 
         cy.get('input[type=email]').type('ayachichrif23@gmail.com') 
    
         cy.get('input[type=password]').type('123456') ; 
    
         cy.get('button').contains('Sign in').click() ;
    
         cy.contains('Your Feed', {timeout:40000})
    
    }) 

    it('new post' , () => {

        cy.get('.container > .nav > :nth-child(2) > .nav-link').click() ; 

        cy.get(':nth-child(1) > .form-control').type('asma bouzidi123') ; 

        cy.get(':nth-child(2) > .form-control').type('test')

        cy.get(':nth-child(3) > .form-control').type('test test')

        cy.get(':nth-child(4) > .form-control').type('test tes test test')

        cy.get('.btn').click() ; 

        // cy.get('.form-control'  ).closest('.card-block').type('commentaire :) ' ) ;
       cy.contains('Edit Article',{timeout:40000}) 
       cy.get('.form-control'  ).closest('.card-block').type('commentaire :) ' ) ;
       cy.get('.card-footer > .btn').click() ;

       cy.get(':nth-child(4) > .nav-link').click()

       cy.contains('asma bouzidi123', {timeout:50000}) ; 


      
       

    })

})