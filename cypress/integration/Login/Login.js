import { And, Then, Given } from 'cypress-cucumber-preprocessor/steps';

Given('the user accesses the website', () => {
    cy.visit('/')
})

And('Enter with the correct credentials', () => {
    cy.get(".d-lg-inline-block > .btn > .fal").click()
    cy.get(".fs-2 > :nth-child(1) > .h-100px").should("be.visible")
    cy.get("#user_email").type("manuelledezma687@gmail.com")
    cy.get("#user_password").type("user123a")
    cy.get("#user_login").click()
})

Then('The user enters correctly', () => {
    cy.get('.navbar-brand > .navbar-brand-item').should("be.visible")
    cy.get(".menul-active > .nav-link").should("be.visible")
    cy.get("#profileMenu > #profileImage").should("be.visible")
})