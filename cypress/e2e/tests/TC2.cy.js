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
      cy.login('validLogin')

      LoginPage.clickonLoginbutton()
      LoginPage.pageTittle('Swag Labs')

      ProductsPage.addToCart('Sauce Labs Bolt T-Shirt')
      ProductsPage.getPrice('Sauce Labs Bolt T-Shirt').contains('15.99');
      ProductsPage.addToCart('Sauce Labs Backpack')
      ProductsPage.getPrice('Sauce Labs Backpack').contains('29.99');
      ProductsPage.clickShoppingCart();

      CartPage.clickCheckout();

      CheckoutPage.enterFirstName('Shanika');
      CheckoutPage.enterLastName('Maggamage');
      CheckoutPage.enterZipCode(1010);
      CheckoutPage.clickSubmitButton();
      CheckoutPage.getTotalPrice().contains('49.66');
      CheckoutPage.clickFinishButton();
      CheckoutPage.getCheckoutTitle().contains('Checkout: Complete!');
      CheckoutPage.getSuccessMessage().contains('Thank you for your order!');
      

    })

  })