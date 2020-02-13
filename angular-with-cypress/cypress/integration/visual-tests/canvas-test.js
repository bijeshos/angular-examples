/// <reference types="Cypress" />

context('Canvas - Visual Test', () => {

  it('Visual Test : Scenario 01', () => {
    //cy.viewport(1200,1500)
    cy.visit('/')
      .then(()=>{
        cy.get('[data-cy=canvas-01]')
        .toMatchImageSnapshot(
          {
            "createDiffImage": true,
            "threshold": 0.01,
            "name":"canvas-01-v01",
            "thresholdType": "percent"

          }
        )
      })
  })

})