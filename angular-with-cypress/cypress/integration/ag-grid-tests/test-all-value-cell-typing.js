/// <reference types="Cypress" />

context('Ag Grid Test - Value typing', () => {

  it('Type values in all cells', () => {

    cy.visit('/')

    let header_text_array = [];
    let data_text_array = [];
    let data_cell_handle_array = [];

    //get the header details
    cy.get('.ag-header-cell-label')
      .each(function ($el, index, $list) {
        header_text_array.push($el.find("span.ag-header-cell-text").text())
      })
      .then(() => {
        cy.wrap(header_text_array).as('header_text_array')
      })

    cy.get('@header_text_array')
      .then(($header_text_array) => {
        cy.log('header_text_array: ' + $header_text_array)
      })


    //get the cell value details
    cy.get('.ag-cell-value')
      .each(function ($el, index, $list) {
        data_text_array.push($el.text())
        data_cell_handle_array.push($el)
      })
      .then(() => {
        cy.wrap(data_text_array).as('data_text_array')
        cy.wrap(data_cell_handle_array).as('data_cell_handle_array')
      })

    cy.get('@data_text_array')
      .then(($data_text_array) => {
        cy.log('data_text_array: ' + $data_text_array)
      })

    cy.get('@data_cell_handle_array')
      .each(function ($el, index, $list) {
        //cy.wrap($el).dblclick({ force: true }).type('test-'+index)
        if (index % 9 != 0) {
          cy.log('index: '+index);
          //cy.wait(100)
          cy.wrap($el)
            .click().type(index+'{enter}')
        }
      })

  })

})