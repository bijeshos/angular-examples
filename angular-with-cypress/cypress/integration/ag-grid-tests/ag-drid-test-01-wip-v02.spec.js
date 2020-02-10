/// <reference types="Cypress" />



context('Ag Grid Page - Tests', () => {



  it('Test Scenario 01', () => {

    cy.visit('/')

    let header_text_array = [];
    let data_text_array = [];
    let data_cell_handle_array = [];

    //get the header details
    cy.get('.ag-header-cell-label')
      .each(function ($el, index, $list) {
        //cy.log('header-' + index + ':' + $el.find("span.ag-header-cell-text").text())
        header_text_array.push($el.find("span.ag-header-cell-text").text())
        //cy.log('header-array: '+header)
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
        //cy.log('cell-value-' + index + ':' + $el.text())
        data_text_array.push($el.text())
        data_cell_handle_array.push($el)
        //cy.wrap($el).dblclick().type('test-'+index)
      })
      .then(() => {
        cy.wrap(data_text_array).as('data_text_array')
        cy.wrap(data_cell_handle_array).as('data_cell_handle_array')
      })

    cy.get('@data_text_array')
      .then(($data_text_array) => {
        cy.log('data_text_array: ' + $data_text_array)
      })

    cy.wait(10000)

    cy.get('@data_cell_handle_array')
      .each(function ($el, index, $list) {
        //cy.wrap($el).dblclick({ force: true }).type('test-'+index)
        //if (index % 3 == 2) {
        cy.wait(1000)
        cy.wrap($el)
          .focus()
          .click().type(index)
        //}


      })





  })

})