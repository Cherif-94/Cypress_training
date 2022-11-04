describe('Authentification' ,  () => {
 

it('first scenario valid authentification ' , () => {

    cy.visit('https://react-redux.realworld.io/#/login?_k=2noabt') ; 
     
     // Get input by type 
     cy.get('input[type=email]').type('ayachichrif23@gmail.com') 

     cy.get('input[type=password]').type('123456') ; 

     cy.get('button').contains('Sign in').click() ;

     cy.contains('Your Feed')

})

it('second scenario non valid ( email valid - password non valid )' , () => {

  cy.visit('https://react-redux.realworld.io/#/login?_k=2noabt') ; 

  cy.get('input[type=email]').type('ayachichrif23@mail.com')

  cy.get('input[type=password]').type('kjikjojoijoioioioioioi') 

  cy.get('button').contains('Sign in').click() ;

  cy.contains('email or password is invalid').should('be.visible');



  
})

it('third scenario non valid ( email non valid - password valid) ' , () => {

  cy.visit('https://react-redux.realworld.io/#/login?_k=2noabt')

  cy.get('input[type=email]').type('ayayayaya@hahahaha.com') ;

  cy.get('input[type=password]').type('123456') ; 

  cy.get('button').contains('Sign in').click() ; 

  cy.contains('email or password is invalid').should('be.visible');

  
})

it.only('the last scenario non valid ' , () => {

  cy.visit('https://react-redux.realworld.io/#/login?_k=nfkcdv')

  cy.get('input[type=email]').type('kjdkjfkjfkjf@kjkj.com')

  cy.get('input[type=password]').type('09876890876890')

  cy.get('button[type=submit]').click() ;

  cy.contains('email or password is invalid').should('be.visible')



  
})


})