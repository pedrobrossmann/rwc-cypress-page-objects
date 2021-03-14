class Routes {
    
    nomeDaRota = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postUsers: 'POSTUsers',
        getTags: 'GETTags',
        getArticlesFeed: 'GETArticlesFeed',
        postUserLogin: 'POSTUserLogin'
    }

    init() {
        cy.intercept('POST', '**/api/articles').as(this.nomeDaRota.postArticles)
        cy.intercept('GET', '**/api/articles/pedro-qa-**').as(this.nomeDaRota.getArticlesTitle)
        cy.intercept('GET', '**/api/articles/pedro-qa-**/comments').as(this.nomeDaRota.getArticlesTitleComments)
        cy.intercept('POST', '**/api/users').as(this.nomeDaRota.postUsers)
        cy.intercept('GET', '**/api/tags').as(this.nomeDaRota.getTags)
        cy.intercept('GET', '**/api/articles/feed**').as(this.nomeDaRota.getArticlesFeed)
        cy.intercept('POST', '**/api/users/login').as(this.nomeDaRota.postUserLogin)
    }

}

export default new Routes()