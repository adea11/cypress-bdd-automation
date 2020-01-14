import { Given ,When,And,Then} from "cypress-cucumber-preprocessor/steps";

const url = "http://the-internet.herokuapp.com/forgot_password";

Given(`I navigate to url home page`, () => {
  cy.visit(url);
});

When(`I input an invalid password`, () =>{
  cy.get('#email').type('test@test.test');
});

And('I click Retrive Password button', () =>{
  cy.get('.icon-2x').click();
});

Then('Retrival email should be sent', ()=>{
  cy.contains("Your e-mail's been sent!").should('be.visible');
  cy.wait(1000);
});


    
  
