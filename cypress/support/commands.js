/// <reference types="Cypress" />
/// <reference types = 'cypress-xpath'/>


//Custom commands to enter values
Cypress.Commands.add('verify',(label)=>{
    cy.contains(label).click();
    
})

//Custom Command to Logout
Cypress.Commands.add('logout',()=>{ 
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    
})

//Cutom Comand for Logs
Cypress.Commands.add('logMessage', (message) => {
    cy.log(message);
  });

//Custom Command to Login with username and password
Cypress.Commands.add('login', (fileName, username = '', password = '') => {
    cy.get('.login_wrapper-inner').first().within((form) => {
        cy.fixture(fileName).then( user => {
            let str = [];
            str[0] = user.username.toString();
            str[1] = user.password.toString();
            let i = 0;
            if (username === '' && password === '')
            {
                cy.get('input').
                each(($el, index, $list) => {
                    if($el.is(":visible") && i <= 1)
                    {
                        cy.wrap($el)
                            .type(str[i]);
                        i++;
                    }
                });
            } else {
                cy.get(username)
                    .type(str[0]);
                cy.get(password)
                    .type(str[1]);
            }
            
        });
        
        
        
    });
});



