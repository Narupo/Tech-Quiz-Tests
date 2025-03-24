describe('Tech Quiz E2E', () => {
  beforeEach(() => {
    // Navigate to the home page before each test
    cy.visit('/');
  });

  it('should begin the quiz and display the first question', () => {
    // Start the quiz by clicking the button
    cy.contains('button', 'Start Quiz').should('exist').click();

    // Validate that a question is shown on screen
    cy.get('h2').should('not.be.empty');
  });

  it('should complete the quiz by answering all questions', () => {
    // Start the quiz
    cy.contains('button', 'Start Quiz').click();

    // Ensure the first question appears
    cy.get('h2').should('not.be.empty');

    // Loop through all questions and click the first answer option each time
    Array.from({ length: 10 }).forEach(() => {
      cy.get('button.btn.btn-primary').first().click();
    });

    // Confirm quiz completion
    cy.contains('h2', 'Quiz Completed').should('exist');
    cy.contains('Your score:').should('exist');
  });

  it('should restart the quiz after finishing it', () => {
    // Launch the quiz
    cy.get('button').contains('Start Quiz').click();

    // Proceed through the entire quiz by selecting the first answer each time
    for (let step = 0; step < 10; step++) {
      cy.get('button.btn.btn-primary').first().click();
    }

    // Ensure completion state is reached
    cy.get('h2').contains('Quiz Completed').should('exist');

    // Restart the quiz
    cy.contains('button', 'Take New Quiz').click();
  });
});

  




