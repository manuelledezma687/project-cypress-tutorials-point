
describe("Cypress test", function () {

    beforeEach(() => {
        cy.visit("/")
        cy.fixture('login')
            .then(userData => {
                this.userData = userData
            });
    })

    it('Login from standard user', () => {
        cy.get(".navbar-brand > .light-mode-item").should("be.visible")
        cy.get(".d-lg-inline-block > .btn > .fal").click()
        cy.get(".fs-2 > :nth-child(1) > .h-100px").should("be.visible")
        cy.get("#user_email").type(this.userData.username)
        cy.get("#user_password").type(this.userData.password)
        cy.get("#user_login").click()
        cy.get('.navbar-brand > .navbar-brand-item').should("be.visible")
        cy.get(".menul-active > .nav-link").should("be.visible")
        cy.get("#profileMenu > #profileImage").should("be.visible")

    })
})