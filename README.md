# Tech Quiz Cypress Test Suite

---

## 🧪 Overview
This project is a Cypress testing suite for a fully functional Tech Quiz application built with the MERN stack (MongoDB, Express.js, React, and Node.js). The quiz app allows users to take a timed quiz of 10 randomly selected tech questions and view their final score.

The focus of this assignment is to implement **component** and **end-to-end (E2E)** testing using **Cypress**, reinforcing the importance of automated testing in modern web development.

---

## 📚 Table of Contents
- [✅ Features Tested](#-features-tested)
- [📁 Project Structure (Testing Focus)](#-project-structure-testing-focus)
- [🛠️ Setup & Installation](#️-setup--installation)
- [🧪 Testing](#-testing)
- [📹 Walkthrough Video](#-walkthrough-video)
- [🧰 Technologies Used](#-technologies-used)
- [📄 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## ✅ Features Tested
- **Component Test** for the `Quiz` component
- **E2E Test** that simulates a full user experience:
  - Starting the quiz
  - Answering all 10 questions
  - Viewing the final score
  - Restarting the quiz

---

## 📁 Project Structure (Testing Focus)
```
cypress/
├── component/
│   └── quiz.cy.tsx           # Component test using mock data
├── e2e/
│   └── quiz.cy.js            # End-to-end test using live backend
├── fixtures/
│   └── questions.js          # Mock questions for component testing
├── support/
│   ├── commands.ts
│   └── e2e.ts
```

---

## 🛠️ Setup & Installation
1. **Clone the Repository**
```bash
git clone https://github.com/Narupo/tech-quiz-tests.git
cd tech-quiz-tests
```

2. **Install Dependencies**
```bash
npm run install
```

3. **Seed the Database**
Ensure MongoDB is running and then:
```bash
npm run seed
```

4. **Start the Application**
```bash
npm run start:dev
```

---

## 🧪 Testing
There are three main test scripts available:

### 1. Run Cypress App with GUI
```bash
npm run test
```
- Opens the Cypress test runner window
- Choose between **E2E** or **Component** testing
- Select the browser (e.g., **Electron** or **Chrome**)
- Choose the test file to run manually

### 2. Run E2E Tests from Command Line
```bash
npm run test:headless
```
- Executes all end-to-end tests in headless mode (Electron)
- Prints results in the terminal
- Great for CI/CD or screen recordings

### 3. Run Component Tests from Command Line
```bash
npm run test:component
```
- Executes all component tests using Cypress’s component runner
- Useful for testing individual components in isolation

---

## 📹 Walkthrough Video
https://github.com/user-attachments/assets/b935befb-e19a-4e2e-864d-4ec91fcc2b54

The video includes:
- How to start the application from the command line
- Running both component and E2E tests
- Demonstrating test output and success

---

## 🧰 Technologies Used
- React 18
- Node.js / Express.js
- MongoDB (with Mongoose)
- Cypress (Component & E2E Testing)
- Bootstrap 5

---

## 📄 License
This project is for educational purposes only as part of a full-stack bootcamp challenge.

---

## 🙌 Acknowledgments
Starter codebase provided by the bootcamp. Custom testing and refinements developed independently to meet challenge criteria.

---



