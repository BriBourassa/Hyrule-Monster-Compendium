describe('As a user, I should be able to search, favorite, and delete monsters', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://botw-compendium.herokuapp.com/api/v2/category/monsters', {
      fixture: 'monster-list.json'
    })
  })

  it('should see the title, "home" and "favorites" buttons  on the landing page', () => {
    cy.get('h1').contains('Hyrule Monster Compendium')
    cy.get('button').contains('home')
    cy.get('button').contains('favorites')
  })


    it('should be able to search for a monster by name in the search bar', () => {
   
      cy.get('input').type('Naydra')
      cy.get('button').eq(2).click()
        .get('img')
        cy.get('https://botw-compendium.herokuapp.com/api/v2/entry/naydra/image')
  
  })

    // should be able to search by location

    //should be able to favorite monster

    //should be able to delete monster from favorites

 


});