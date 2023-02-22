import LoginPage from '../../pages/LoginPage'
import HomePage from '../../pages/HomePage'

describe("Login test", function () {

    const loginPage = new LoginPage()
    const homePage = new HomePage()

    beforeEach(() => {
        homePage.navigate()
        cy.fixture('login')
            .then(userData => {
                this.userData = userData
            });
    })

    it('Login from standard user', () => {
        homePage.goToLoginSection()
        loginPage
            .typeEmail(this.userData.username)
            .typePassword(this.userData.password)
            .submit()
        cy.get('.navbar-brand > .navbar-brand-item').should("be.visible")
        cy.get(".menul-active > .nav-link").should("be.visible")
        cy.get("#profileMenu > #profileImage").should("be.visible")

    })
})