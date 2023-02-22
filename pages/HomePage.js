
class HomePage {
    navigate() {
        cy.visit('/')
    }

    goToLoginSection() {
        const field = cy.get('.d-lg-inline-block > .btn > .fal')
        field.click()
        cy.get(".fs-2 > :nth-child(1) > .h-100px").should("be.visible")
        return this
    }

    goToAboutUsSection() {
        cy.scrollTo("bottom")
        cy.get(".col-lg-12 > .nav > :nth-child(1) > .nav-link").click()
        return this
    }

    printAllElementsInConsole(element) {
        cy.get(element).each((input, i) => {
            cy.log(`${element} #: ${i = i + 1}: ${input.val().toString()}`)
        })
    }
}

export default HomePage