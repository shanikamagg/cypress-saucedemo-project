const LoginPage = require('../pageobjects/LoginPage'),
      ProductsPage = require('../pageobjects/ProductsPage'),
      CartPage = require('../pageobjects/CartPage'),
      CheckoutPage = require('../pageobjects/CheckoutPage')


describe('Products Page Functionality', () => {

   //Open the browser
    beforeEach(()=>
    {
      LoginPage.open()
     
    })
  
    //Navigate to the Products Page add the Sauce Labs Bolt T-Shirt to basket 
    it('Navigate to the Products Page add the Sauce Labs Bolt T-Shirt to basket',() =>
    {
      cy.login('validLogin');

      LoginPage.clickonLoginbutton();
      LoginPage.pageTittle().should('eq','Swag Labs');

      //Assert the Sauce Labs Bolt T-Shirt product and the price
      ProductsPage.getPrice('Sauce Labs Bolt T-Shirt').should('be.visible').should('have.text','$15.99');
      
      //Assert the Sauce Labs Backpack product and the price - Checkout the price
      ProductsPage.getPrice('Sauce Labs Backpack').should('be.visible').should('have.text','$29.99');
      ProductsPage.addToCart('Sauce Labs Backpack');
      ProductsPage.clickShoppingCart();
      CartPage.clickCheckout();

      CheckoutPage.enterFirstName('Shanika');
      CheckoutPage.enterLastName('Maggamage');
      CheckoutPage.enterZipCode(1010);
      CheckoutPage.clickSubmitButton();
      
      //Assert the Total price
      CheckoutPage.getTotalPrice().should('be.visible').should('have.text','Total: $32.39');

      CheckoutPage.clickFinishButton();
      
      //Assertions of Checkout completion page
      CheckoutPage.getCheckoutTitle().should('have.text','Checkout: Complete!');
      CheckoutPage.getSuccessMessage().should('have.text','Thank you for your order!');
      CheckoutPage.getBackHomeButton().should('be.visible');
      

    })

    afterEach(()=>{
      cy.logout()
    })

  })