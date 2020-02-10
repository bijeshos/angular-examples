/// <reference types="Cypress" />

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

context('Ag Grid Page- Tests', () => {

  it('Test Scenario 01', () => {

    cy.visit('/')

    let header = [];

    //get the header details
    cy.get('.ag-header-cell-label')
      .each(function ($el, index, $list) {
        cy.log('header-' + index + ':' + $el.find("span.ag-header-cell-text").text())
        header.push($el.find("span.ag-header-cell-text").text())
        //cy.log('header-array: '+header)
      })
      .then(() => {
        cy.wrap(header).as('headers')
      })

    cy.get('@headers')
      .then(($headerArray) => {
        cy.log('header-array: ' + $headerArray)
      })

    cy.get('.ag-header-cell-label').then(($list) => {
      const headerCount = $list.length
      cy.log('headerCount1:' + headerCount)
      cy.wrap(headerCount).as('headerCount')
    })

    cy.get('@headerCount').then(($headerCount2) => {
      cy.log('headerCount2:' + $headerCount2)
    })

    //get the cell value details

    cy.get('.ag-cell-value')
      .each(function ($el, index, $list) {
        cy.log('cell-value-' + index + ':' + $el.text())
      })

    cy.get('.ag-cell-value').then(($list) => {
      const valueCount = $list.length
      cy.log('valueCount1:' + valueCount)
      cy.wrap(valueCount).as('valueCount')
    })

    cy.get('@valueCount').then(($valueCount2) => {
      cy.log('valueCount2:' + $valueCount2)
    })

  })

})