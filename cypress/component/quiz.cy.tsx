import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react';

describe('Quiz Component', () => {
  beforeEach(() => {
    // Intercept API call and return mock questions
    cy.intercept('GET', '/api/questions/random', {
      statusCode: 200,
      body: [
        { _id: '1', question: 'What is 2 + 2?', options: ['3', '4', '5'], correctAnswer: '4' },
        { _id: '2', question: 'What is 3 + 5?', options: ['7', '8', '9'], correctAnswer: '8' },
      ],
    }).as('getQuestions');
  });

  it('renders the start button initially', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('starts the quiz when the start button is clicked', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions'); // Ensure Cypress waits for the mock API response
    cy.get('.question').should('be.visible');
  });

  it('moves to the next question when an answer is selected', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions'); // Ensure questions load first
    cy.get('.answer-button').first().click();
    cy.get('.question').should('exist'); // Ensure another question appears
  });

  it('shows the final score at the end of the quiz', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions'); // Wait for mock questions to load
    for (let i = 0; i < 2; i++) {
      cy.get('.answer-button').first().click();
    }
    cy.contains('Your Score:').should('be.visible');
  });
});
