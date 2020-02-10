/// <reference types="Cypress" />

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';

context('Ag Grid Page- Tests', () => {

  //testHostComponent: TestHostComponent;


  //beforeEach(async(() => {
  /*beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AgGridModule.withComponents([]
        )
      ],
      declarations: [TestHostComponent]
    }).compileComponents();

    //fixture = TestBed.createComponent(TestHostComponent);
    //component = fixture.componentInstance;

    //fixture.detectChanges();
  });

  it('grid API is not available until  `detectChanges`', () => {
    expect(component.gridOptions.api).not.toBeTruthy();
  });

  it('grid API is available after `detectChanges`', () => {
    fixture.detectChanges();
    expect(component.gridOptions.api).toBeTruthy();
  });

  it('the grid cells should be as expected', () => {
    const appElement = fixture.nativeElement;

    const cellElements = appElement.querySelectorAll('.ag-cell-value');
    expect(cellElements.length).toEqual(3);
    expect(cellElements[0].textContent).toEqual("Test Name");
    expect(cellElements[1].textContent).toEqual("42");
    expect(cellElements[2].textContent).toEqual("84");
  });

  it('cell should be editable and editor component usable', () => {
    // we use the API to start and stop editing - in a real e2e test we could actually double click on the cell etc
    component.api.startEditingCell({
      rowIndex: 0,
      colKey: 'raw'
    });

    const instances = component.api.getCellEditorInstances();
    expect(instances.length).toEqual(1);

    const editorComponent = instances[0].getFrameworkComponentInstance();
    editorComponent.setValue(100);

    component.api.stopEditing();

    const appElement = fixture.nativeElement;
    const cellElements = appElement.querySelectorAll('.ag-cell-value');
    expect(cellElements.length).toEqual(3);
    expect(cellElements[0].textContent).toEqual("Test Name");
    expect(cellElements[1].textContent).toEqual("100");
    expect(cellElements[2].textContent).toEqual("200");
  });
  */

  /*it('test-00',()=>{

    cy.visit('/')
    cy.get('.ag-header-cell-label').as('header-cells')
    cy.get('.ag-cell-value').as('value-cells')


  })*/

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



    /*
  cy.get('.ag-header-cell-label').as('header-cells')
  cy.get('.ag-cell-value').as('value-cells')

  const noOfHeaders = cy.get('@header-cells').length
  cy.log('noOfHeaders-0: ' + noOfHeaders)

  const noOfCells = cy.get('@value-cells').length
  cy.log('noOfCells-0: ' + noOfCells)

  //get the header details
  cy.get('.ag-header-cell-label').then(($list) => {
    // redefine text reference
    const noOfHeaders = $list.length
    //Cypress.log('noOfHeaders: ' + noOfHeaders)
    var headerList = new Array();

    Cypress.$.each(function ($value, index, $list) {
      headerList.push($value.find("span").text());
      //cy.log('header-value: '+$value.find("span").text())
      //cy.log('ag-cell-value: '+$el.find("span").text())
    })

    //cy.log('header-list: ' + headerList)

  })



  var header2 = '';
  //get cell values
  cy.get('.ag-cell-value')
    .each(function ($el, index, $list) {
      header2.
        cy.log('ag-cell-value: ' + $el.find("span").text())
    })*/

  })

})