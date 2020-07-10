describe('Game interface', () => {
    it('page successfully renders', () => {
        cy.visit('http://localhost:3001/');
        cy.get('#title').should('contain', 'Rock.Paper.Scissors');
        cy.get('#challenge').should('contain', 'Who will come out on top?!');
        cy.get('#rock').should('contain', 'Unleash Rock');
        cy.get('#paper').should('contain', 'Deploy Paper');
        cy.get('#scissors').should('contain', 'Arm Scissors');
    })
})