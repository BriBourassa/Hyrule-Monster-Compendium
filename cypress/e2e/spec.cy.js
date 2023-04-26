describe('As a user, I should be able to search, favorite, and delete monsters', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/monsters', {
      fixture: 'monster-list.json'
    })
  })

    it('should see the title, "home" and "favorites" buttons  on the landing page', () => {
    cy.get('h1').contains('Hyrule Monster Compendium')
    cy.get('button').contains('Home')
    cy.get('button').contains('Favorites')
    })

    it('should be able to search for a monster by name in the search bar', () => {
      cy.get('input').type('naydra')
      cy.get('button').eq(2).click()
      cy.get('img').click()
      cy.get('h1').contains('NAYDRA')
    })

    it('should be able to search monsters by location and see a list of monsters that spawn in that location', () => {
      cy.get('input').type('canyon')
      cy.get('button').eq(2).click()
      cy.get(':nth-child(1) > .monster-card > a > .monster-view > img')
      // cy.get('img').contains('https://botw-compendium.herokuapp.com/api/v2/entry/fire_keese/image')
    })
  
    
    //should be able to favorite monster

    //should be able to delete monster from favorites

 


});