
describe("Home Page test", () => {

    beforeEach(() => {
        cy.visit("/")
    },)

    it('Visit Home', () => {
        cy.get(".navbar-brand > .light-mode-item").should("be.visible")
    })

    it('Visit About Us Section', () => {
        cy.scrollTo("bottom")
        cy.get(".col-lg-12 > .nav > :nth-child(1) > .nav-link").click()
        cy.url().should("eq", "https://tutorialspoint.com/about/index.htm")
    })

    it('List Inputs', () => {
        cy.get('input').each((input, i) => {
            cy.log(`Input type text number:${i = i + 1}: ${input.val().toString()}`)
        })
        cy.get('input').should('be.visible')
    })

    it('List all Buttons', () => {
        cy.get('button').each((input, i) => {
            cy.log(`Button number: ${i = i + 1}: ${input.val().toString()}`)
        })
        cy.get('button').should('be.visible')
    })

    it('List all URLS', () => {
        cy.get('a[href]').each((input, i) => {
            cy.log(`Url #: ${i = i + 1}: ${input.val().toString()}`)
        })
        cy.get('a[href]').should('be.visible')
    })
})