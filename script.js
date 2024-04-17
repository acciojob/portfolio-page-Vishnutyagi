//your code here
() => { 
    cy.visit(baseUrl + "/main.html"); 
    cy.get('#projects').children().should('have.length.greaterThan', 0); 
    cy.get('#projects').find('ul').children().should('have.length.greaterThan', 0); 
    cy.get('#projects').find('ul').children().each(($li) => { 
        cy.wrap($li).invoke('text').then((text) => { 
            expect(text.trim()).to.have.length.greaterThan(0); 
        }); 
    }); 
}
