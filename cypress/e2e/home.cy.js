describe('Home Page Test', () => {
    beforeEach(() => {
      cy.visit('/'); // Visit the home page before each test
    });
  
    it('Check the input field and button visibility', () => {
      cy.get('input').should('be.visible'); // Check if the input field is visible
      cy.get('button#submit').should('be.visible'); // Check if the submit button is visible
    });
  
    it('Add a name and check table rendering', () => {
      cy.get('input').type('Watch Anime');
      cy.get('button#submit').click();
  
      // Check if the name is added to the table
      cy.get('table').should('be.visible');
      cy.get('table tbody tr').should('have.length', 1); // There should be one row in the table
      cy.get('table tbody tr td').eq(1).should('contain.text', 'Watch Anime'); // Check the name in the second column
    });
  
    it('Check if input field is cleared after submission', () => {
      cy.get('input').type('Watch Anime');
      cy.get('button#submit').click();
      cy.get('input').should('have.value', ''); // Check if the input field is cleared
    });
  
    /*it('Add multiple names and check table rendering', () => {
      const names = ['Play Games', 'Read Manga', 'Listen Songs'];
      names.forEach(name => {
        cy.get('input').type(name);
        cy.get('button#submit').click();
      });
  
      // Check if all names are added to the table
      cy.get('table tbody tr').should('have.length', names.length); // There should be three rows in the table
      names.forEach((name, index) => {
        cy.get('table tbody tr').eq(index).find('td').eq(1).should('contain.text', name); // Check the name in the second column
      });
    });
  
    it('Delete a name from the table', () => {
      cy.get('input').type('Play Games');
      cy.get('button#submit').click();
      cy.get('input').type('Read Manga');
      cy.get('button#submit').click();
  
      // Check if the table has two rows
      cy.get('table tbody tr').should('have.length', 2);
  
      // Click the delete button for the first row
      cy.get('table tbody tr').eq(0).find('button').click();
  
      // Check if the table has one row left
      cy.get('table tbody tr').should('have.length', 1);
      cy.get('table tbody tr td').eq(1).should('contain.text', 'Read Manga'); // Check if the remaining name is 'Jane Doe'
    });*/
  });
  