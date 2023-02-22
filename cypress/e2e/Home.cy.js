import HomePage from '../../pages/HomePage'

describe("HomePage test", () => {

    const homePage = new HomePage()

    beforeEach(() => {
        homePage.navigate()
    },)

    it('Visit Home', () => {
        cy.get(".navbar-brand > .light-mode-item").should("be.visible")
    })

    it('Visit About Us Section', () => {
        homePage.goToAboutUsSection()
        cy.url().should("eq", "https://tutorialspoint.com/about/index.htm")
    })

    it('List Inputs', () => {
        homePage.printAllElementsInConsole('input')
        cy.get('input').should('be.visible')
    })

    it('List all Buttons', () => {
        homePage.printAllElementsInConsole('button')
        cy.get('button').should('be.visible')
    })

    it.only('List all URLS', () => {
        homePage.printAllElementsInConsole('a[href]')
        cy.get('a[href]').should('be.visible')
    })
})