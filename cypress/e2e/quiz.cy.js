/* 
  describe('Tech Quiz E2E', () => {
    beforeEach(() => {
      // ✅ Navigate to the application before each test
      cy.visit('/');
    });
  
    it('should initiate the quiz and display a question', () => {
      // ✅ Locate and click the "Start Quiz" button
      cy.get('button').contains('Start Quiz').should('be.visible').click();
  
      // ✅ Ensure a question is displayed on the screen
      cy.get('h2').should('have.text').and('not.be.empty');
    });
  
    it('should allow answering all quiz questions', () => {
      // ✅ Start the quiz
      cy.get('button').contains('Start Quiz').click();
  
      // ✅ Confirm that a question is displayed
      cy.get('h2').should('have.text').and('not.be.empty');
  
      // ✅ Iterate through questions and answer each one
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('1').click(); // Selecting the first answer each time
      }
  
      // ✅ Ensure the quiz completion message appears
      cy.contains('Quiz Completed').should('exist');
  
      // ✅ Confirm the final score is displayed
      cy.contains('Your score:').should('exist');
    });
  
    it('should restart the quiz when "Take New Quiz" is clicked', () => {
      // ✅ Start the quiz
      cy.get('button').contains('Start Quiz').click();
  
      // ✅ Ensure the first question is visible
      cy.get('h2').should('have.text').and('not.be.empty');
  
      // ✅ Answer all questions
      for (let i = 0; i < 10; i++) {
        cy.get('button').contains('1').click();
      }
  
      // ✅ Confirm quiz completion
      cy.contains('Quiz Completed').should('exist');
  
      // ✅ Click "Take New Quiz" to restart
      cy.get('button').contains('Take New Quiz').click();
    });
  });
  
  */



