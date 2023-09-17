const LoginPage = require('../pageobjects/LoginPage'),
      ProductsPage = require('../pageobjects/ProductsPage'),
      CartPage = require('../pageobjects/CartPage'),
      CheckoutPage = require('../pageobjects/CheckoutPage')


describe('Products Page Functionality', () => {

   //Open the browser
    beforeEach(()=>
    {
      LoginPage.open();
      cy.login('validLogin');
      LoginPage.clickonLoginbutton();
      LoginPage.pageTittle().should('eq','Swag Labs');
      cy.logMessage('Successfully Logged!');
     
    })
  
    //Product Page Navigation and Assert Items
    it('Product Page Navigation and Assert Items',() =>
    {
      //Navigate to Products page and add Sauce Labs Bolt T-Shirt to basket
      ProductsPage.addToCart('Sauce Labs Bolt T-Shirt')
      //Assert that the prices is $15.99
      ProductsPage.getPrice('Sauce Labs Bolt T-Shirt').should('be.visible').should('have.text','$15.99');
      //Add Sauce Labs Backpack to the basket 
      ProductsPage.addToCart('Sauce Labs Backpack')
      //Assert that the prices is $29.99
      ProductsPage.getPrice('Sauce Labs Backpack').should('be.visible').should('have.text','$29.99');
      ProductsPage.clickShoppingCart();

      //Click on Checkout Page
      CartPage.clickCheckout();
      

      //Enter Checkout Information
      CheckoutPage.enterFirstName('Shanika');
      CheckoutPage.enterLastName('Maggamage');
      CheckoutPage.enterZipCode(1010);
      CheckoutPage.clickSubmitButton();
      cy.logMessage('Successfully Proceeded to Checkout!');

      //Assert the Total price
      CheckoutPage.getTotalPrice().should('be.visible').should('have.text','Total: $49.66');
      
      //Click on Finish Button
      CheckoutPage.clickFinishButton();

      //Assertions of Checkout completion page
      CheckoutPage.getCheckoutTitle().should('be.visible').should('have.text','Checkout: Complete!');
      CheckoutPage.getSuccessMessage().should('be.visible').should('have.text','Thank you for your order!');
      CheckoutPage.getBackHomeButton().should('be.visible').should('be.visible');
      cy.logMessage('Successfully Finished the Checkout!');
      

     

    })

    afterEach(()=>{
      cy.logout()
    })

  })