/// <reference types="Cypress" />

context('Ag Grid Test - Retrieve Values', () => {

  it('Get Header and Values', () => {

    cy.visit('/')

    let header = [];

    //get the header details
    cy.get('.ag-header-cell-label')
      .each(function ($el, index, $list) {
        cy.log('header-' + index + ':' + $el.find("span.ag-header-cell-text").text())
        header.push($el.find("span.ag-header-cell-text").text())
      })
      .then(() => {
        cy.wrap(header).as('headers')
      })

    cy.get('@headers')
      .then(($headers) => {
        cy.log('header-array: ' + $headers)
      })

    cy.get('.ag-header-cell-label').then(($list) => {
      const header_cell_count = $list.length
      cy.log('header_cell_count:' + header_cell_count)
      cy.wrap(header_cell_count).as('header_cell_count')
    })

    cy.get('@header_cell_count').then(($header_cell_count) => {
      cy.log('header_cell_count:' + $header_cell_count)
    })

    //get the cell value details
    cy.get('.ag-cell-value')
      .each(function ($el, index, $list) {
        cy.log('cell-value-' + index + ':' + $el.text())
      })

    cy.get('.ag-cell-value').then(($list) => {
      const value_cell_count = $list.length
      cy.log('value_cell_count:' + value_cell_count)
      cy.wrap(value_cell_count).as('value_cell_count')
    })

    cy.get('@value_cell_count').then(($value_cell_count) => {
      cy.log('value_cell_count:' + $value_cell_count)
    })

  })

})