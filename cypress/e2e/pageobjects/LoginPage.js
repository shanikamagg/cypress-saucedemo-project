class LoginPage
{
  //ELements of Login Page
  elemenets ={
    loginbtn : () => cy.get('#login-button'),
    error_message_lockedUser :() => cy.get("h3[data-test='error']"),
    tittleText :() => cy.get('.app_logo')
  }

  //Launch the browser
    open() 
    {
      cy.visit(Cypress.env('url'));
    }
  
  //Method to assert the page tittle
  pageTittle(pageTittle)
  {
    return this.elemenets.tittleText(pageTittle);
  }
  
  //Click on login button in the Login page
    clickonLoginbutton()
    {
       this.elemenets.loginbtn().click();
    }

  // Method to assert error message
    getErrorMessage() {
      return this.elemenets.error_message_lockedUser();
  }




}

module.exports = new LoginPage();