
class LoginPage {
    typeEmail(email) {
        const emailInput = cy.get('#user_email')
        emailInput.clear()
        emailInput.type(email)
        return this
    }

    typePassword(password) {
        const passwordInput = cy.get('#user_password')
        passwordInput.clear()
        passwordInput.type(password)
        return this
    }

    submit() {
        cy.get("#user_login").click()
    }
}

export default LoginPage