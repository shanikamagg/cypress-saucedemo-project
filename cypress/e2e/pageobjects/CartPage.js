class CartPage
{
    //Elements of CartPage
    elements ={

        checkoutBtn : () => cy.get('[id="checkout"]')
    }

   // Method to product checkout
    clickCheckout(){
        this.elements.checkoutBtn().click();
    }

}

module.exports = new CartPage();