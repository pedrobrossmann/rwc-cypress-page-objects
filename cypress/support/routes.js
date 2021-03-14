class Routes {
    
    nomeDaRota = {
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments'
    }
    
    init() {
        cy.intercept('POST', '**/api/articles').as(this.nomeDaRota.postArticles)
        cy.intercept('GET', '**/api/articles/pedro-qa-**').as(this.nomeDaRota.getArticlesTitle)
        cy.intercept('GET', '**/api/articles/pedro-qa-**/comments').as(this.nomeDaRota.getArticlesTitleComments)
    }

}

export default new Routes()