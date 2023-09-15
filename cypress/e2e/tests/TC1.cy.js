const LoginPage = require('../pageobjects/LoginPage')

describe('Login Page Fuctionality Test', () => {

   //Open the browser
    beforeEach(()=>
    {
      LoginPage.open()
     
    })
  
    //Assert the error message after login as the locked user
    it('Verify the error message',() =>
    {
      cy.login('invalidLogin');
      LoginPage.clickonLoginbutton();
      LoginPage.getErrorMessage().contains('Epic sadface: Sorry, this user has been locked out.');
      cy.logMessage('Error message when login with locked user!');

    })

  })