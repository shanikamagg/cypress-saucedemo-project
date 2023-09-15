class ProductsPage
{

    elements ={

        addtoCartbtn : (productName) => cy.xpath(`//*[contains(text(), '${productName}')]`).parents('div.inventory_item_description').contains('Add to cart'),
        price : (productName) => cy.xpath(`//*[contains(text(), '${productName}')]`).parents('div.inventory_item_description').contains('$'),
        price : (productName) => cy.xpath(`//*[contains(text(), '${productName}')]`).parents('div.inventory_item_description').contains('$'),
        shoppingCartbtn : () => cy.get('[class="shopping_cart_link"]') 
    }

    //Method to click on Add to Cart button
    addToCart(productName) {
        this.elements.addtoCartbtn(productName).click();
    }

    //Method to get the price
    getPrice(productName){
        return this.elements.price(productName);
    }

    //Method to click on shopping cart
    clickShoppingCart(){
        this.elements.shoppingCartbtn().click();
    }

}

module.exports = new ProductsPage();