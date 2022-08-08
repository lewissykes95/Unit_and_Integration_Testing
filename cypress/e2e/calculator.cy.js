describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#number3').click();
    cy.get('.display').should('contain', '3')
    cy.get('#number4').click();
    cy.get('.display').should('contain', '4')
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
  })
  

  it('should update with the operators', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-add').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4')
  })


  it('should update with multiple operators', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-add').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-multiply').click();
    cy.get('.display').should('contain', '13')
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '117')
  })



  it('should be able to view positive number', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-add').click();
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '16')

  })



  it('should be able to view negative number', () => {
    cy.get('#number8').click();
    cy.get('.display').should('contain', '8')
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('.display').should('contain', '9')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })





  it('should be able to view decimal number', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '2.5')
   
  })



  it('should be able to view very large numbers', () => {
    cy.get('#number5').click();
    cy.get('#number1').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '5123')
    cy.get('#operator-multiply').click();
    cy.get('#number5').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('.display').should('contain', '5456')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '27951088')
  })



  it('should return 0 when divided by 0', () => {
    cy.get('#number5').click();
    cy.get('.display').should('contain', '5')
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '0')
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error: Unable to Divide')

  })


})