import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';
import mockQuestions from '../fixtures/questions';

describe('<Quiz /> Component', () => {
  // Before each test, intercept API request and return mock data
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: mockQuestions,
    }).as('getQuestions');
  });

  it('renders the start screen initially', () => {
    // Mount the Quiz component
    mount(<Quiz />);
    
    // Ensure that the "Start Quiz" button is visible
    cy.get('button').contains('Start Quiz').should('exist');
  });

  it('starts the quiz and displays the first question', () => {
    // Mount the Quiz component
    mount(<Quiz />);
    
    // Click "Start Quiz" to begin
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for the API call to return questions
    cy.wait('@getQuestions');
    
    // Ensure the first question is displayed
    cy.get('h2').should('contain', mockQuestions[0].question);
  });

  it('handles answering all questions and completing the quiz', () => {
    // Mount the Quiz component
    mount(<Quiz />);
    
    // Click "Start Quiz" to begin
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for the API response
    cy.wait('@getQuestions');

    // Answer first question (Button 3)
    cy.get('button').contains('3').click();
    
    // Answer second question (Button 1)
    cy.get('button').contains('1').click();

    // Verify that the quiz is marked as completed
    cy.contains('Quiz Completed').should('exist');
    
    // Ensure the final score is displayed
    cy.contains('Your score:').should('exist');
  });

  it('restarts the quiz when clicking "Take New Quiz"', () => {
    // Mount the Quiz component
    mount(<Quiz />);
    
    // Click "Start Quiz" to begin
    cy.get('button').contains('Start Quiz').click();
    
    // Wait for questions to load
    cy.wait('@getQuestions');

    // Answer first question (Button 3)
    cy.get('button').contains('3').click();
    
    // Answer second question (Button 1)
    cy.get('button').contains('1').click();

    // Confirm quiz completion before restarting
    cy.contains('h2', 'Quiz Completed').should('exist');
    
    // Click "Take New Quiz" to restart
    cy.get('button').contains('Take New Quiz').click();
  });
});





