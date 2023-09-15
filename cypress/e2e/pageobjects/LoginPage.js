class LoginPage
{
  //ELements of Login Page
  elemenets ={
    loginbtn : () => cy.get('[id="login-button"]'),
    error_message_lockedUser :() => cy.get("[data-test='error']")
  }

  //Launch the browser
    open() 
    {
      cy.visit(Cypress.env('url'));
    }
  
  //Method to assert the page tittle
  pageTittle()
  {
    return cy.title();
  }
  
  //Click on login button in the Login page
  clickonLoginbutton()
  {
       this.elemenets.loginbtn().click();
  }

  // Method to assert error message
  getErrorMessage()
  {
      return this.elemenets.error_message_lockedUser();
  }




}

module.exports = new LoginPage();