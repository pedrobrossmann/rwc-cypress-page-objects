Cypress.Commands.add("login_Backgroud", () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.config().apiUrl}/users/login`,
        body: {
            user: {
                email: Cypress.config().user.email,
                password: Cypress.config().user.senha
            },
        },
    }).then((loginResponse) =>{
        console.log(loginResponse.body.user.token)

        cy.visit('/', {
            onBeforeLoad: (win) => {
                win.localStorage.setItem('jwtToken', loginResponse.body.user.token)
            }
        })
    })
 })