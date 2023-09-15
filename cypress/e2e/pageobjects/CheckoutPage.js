class Checkoutpage
{

    //Elements of CheckoutPage
    elements ={

        firstNameField : () => cy.get('[id="first-name"]'),
        lastNameField : () => cy.get('[id="last-name"]'),
        zipCodeField : () => cy.get('[id="postal-code"]'),
        submitButton : () => cy.get('[id="continue"]'),
        totalPrice : () => cy.xpath('//*[@class="summary_info_label summary_total_label"]'),
        finishButton : () => cy.get('[id="finish"]'),
        successMessage : () => cy.get('#checkout_complete_container > h2'),
        checoutTitle :() => cy.get('[class="title"]'),
        backHomebtn :() => cy.get('[id="back-to-products"]')
    }

    //Method to enter the first name
    enterFirstName(firstName){
        this.elements.firstNameField().type(firstName);

    }

    //Method to enter the last name
    enterLastName(lastName){
        this.elements.lastNameField().type(lastName);

    }

    //Method to enter the Zipcode
    enterZipCode(zipCode){
        this.elements.zipCodeField().type(zipCode);

    }

    //Method to Click on the submit button
    clickSubmitButton(){
        this.elements.submitButton().click();

    }
    
    //Method to get the total price
    getTotalPrice(){
        return this.elements.totalPrice();

    }

    //Method to click on finish button
    clickFinishButton(){
        this.elements.finishButton().click();

    }

    //Method to get the success message
    getSuccessMessage(){
        return this.elements.successMessage();

    }

    //Method to get the checkout tittle
    getCheckoutTitle(){
        return this.elements.checoutTitle();
    }

    //Method to get the Back Home button
    getBackHomeButton(){
        return this.elements.backHomebtn();
    }
}

module.exports = new Checkoutpage();