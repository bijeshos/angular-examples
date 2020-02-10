/// <reference types="Cypress" />


context('Ag Grid Page - Tests', () => {

  let sections_test_config = {};

  before(() => {

    cy.log('inside before')

    cy.fixture('sections_test_config').then((data) => {
      sections_test_config = data;
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

  })

  beforeEach(() => {
    cy.log('inside before each')
    cy.visit('/')

    let header_text_array = [];
    let data_text_array = [];
    let data_cell_handle_array = [];
    let data_meta_present = []

    //incomplete section - starts
    let data_section_1_meta_present = [];
    let data_section_2_meta_present = [];
    //incomplete section - ends


    //get header details
    cy.get('.ag-header-cell-label')
      .each(function ($el, index, $list) {
        header_text_array.push($el.find("span").text())
        cy.log('header-text[' + index + ']: ' + $el.find("span").text())
      })
      .then(() => {
        cy.wrap(header_text_array).as('header_text_array')
        //cy.log('header-text-array: '+header_text_array)
      });

    cy.get('@header_text_array')
      .then(($header_text_array) => {
        cy.log('header_text_array: ' + $header_text_array)
      })


    //get cell value details
    cy.get('.ag-cell-value')
      .each(function ($el, index, $list) {
        data_text_array.push($el.text())
        data_cell_handle_array.push($el)

        cy.log('data-text[' + index + ']: ' + $el.text())

        cy.wrap(sections_test_config.params)
          .each(function ($el2, index2, $list2) {
            if (($el2.row_type != 'total_count_row') && ($el2.observation == $el.text().trim())) {
              data_meta_present.push($el.text())

              //this is to keep track of section_1/section_2 separately
              if ($el2.param_category == 'section_1') {
                data_section_1_meta_present.push($el.text())
              } else if ($el2.param_category == 'section_2') {
                data_section_2_meta_present.push($el.text())
              }
            }
          })

      })
      .then(() => {
        cy.wrap(data_text_array).as('data_text_array')
        //cy.log('data-text-array: '+data_text_array)
        cy.wrap(data_cell_handle_array).as('data_cell_handle_array')
        cy.wrap(data_meta_present).as('data_meta_present')
        cy.wrap(data_section_1_meta_present).as('data_section_1_meta_present')
        cy.wrap(data_section_2_meta_present).as('data_section_2_meta_present')
      });

    cy.get('@data_text_array')
      .then(($data_text_array) => {
        cy.log('data_text_array: ' + $data_text_array)
      })

    cy.get('@data_meta_present')
      .then(($data_meta_present) => {
        cy.log('data_meta_present: ' + $data_meta_present)
        cy.log('number of params present: ' + $data_meta_present.length)
      })



    cy.get('@data_section_1_meta_present')
      .then(($data_section_1_meta_present) => {
        cy.log('data_section_1_meta_present: ' + $data_section_1_meta_present)
        cy.log('number of params present: ' + $data_section_1_meta_present.length)
      })

    cy.get('@data_section_2_meta_present')
      .then(($data_section_2_meta_present) => {
        cy.log('data_section_2_meta_present: ' + $data_section_2_meta_present)
        cy.log('number of params present: ' + $data_section_2_meta_present.length)
      })

  })


  it.skip('Test Scenario 01 : Row :  Total ', () => {

    const row_start_index = 12
    const number_of_hour_columns = 5 // not including row's total column

    let row_cell_indices = [];
    let current_row_cell_index = row_start_index;

    let value_to_type = 2

    for (let i = 0; i < number_of_hour_columns; i++) {
      row_cell_indices.push(current_row_cell_index);
      current_row_cell_index = current_row_cell_index + 1
    }

    cy.wrap(row_cell_indices).as('row_cell_indices')

    let calculated_row_totals = [];
    calculated_row_totals[0] = 0;

    cy.wrap(calculated_row_totals).as('calculated_row_totals');

    cy.get('@row_cell_indices')
      .each(function ($el, index, $list) {
        cy.log('current_row_cell_index: ' + $el)

        cy.get('@data_cell_handle_array')
          .then(($data_cell_handle_array) => {
            cy.wrap($data_cell_handle_array[$el])
              .type(value_to_type)

            let calculated_row_totals_length = this.calculated_row_totals.length;
            let previous_total = this.calculated_row_totals[calculated_row_totals_length - 1];
            let new_total;

            cy.log('calculated_row_totals: before: ' + this.calculated_row_totals)
            cy.log('previous_total: before: ' + previous_total)
            new_total = previous_total + value_to_type;
            this.calculated_row_totals.push(new_total);

            cy.log('calculated_row_totals: after: ' + this.calculated_row_totals)
          })


      })

    let row_total_index = 17

    cy.get('@data_cell_handle_array')
      .then(($data_cell_handle_array) => {
        cy.get('@calculated_row_totals')
          .then(($calculated_row_totals) => {
            let calculated_row_totals_length = $calculated_row_totals.length;
            let latest_calculated_total = $calculated_row_totals[calculated_row_totals_length - 1];
            let displayed_total = $data_cell_handle_array[row_total_index].text()
            cy.log()
            expect(displayed_total).to.equal('' + latest_calculated_total)

          })
      })

  })

  it('Test Scenario 02 : Column: 1400 : Total', () => {

    //----------------------------------------------------------------------------------
    //validate section_1 section
    const section_1_column_start_index = 12
    const number_of_section_1_params = 7; //not including section_1 title row

    let section_1_column_cell_indices = [];
    let section_1_current_column_cell_index = section_1_column_start_index;

    let value_to_type = 2

    for (let i = 0; i < number_of_section_1_params; i++) {
      section_1_column_cell_indices.push(section_1_current_column_cell_index);
      section_1_current_column_cell_index = section_1_current_column_cell_index + 9
    }

    cy.wrap(section_1_column_cell_indices).as('section_1_column_cell_indices')


    let section_1_calculated_column_totals = [];
    section_1_calculated_column_totals[0] = 0;

    cy.wrap(section_1_calculated_column_totals).as('section_1_calculated_column_totals');


    cy.get('@section_1_column_cell_indices')
      .each(function ($el, index, $list) {
        cy.log('section_1_current_column_cell_index: ' + $el)

        cy.get('@data_cell_handle_array')
          .then(($data_cell_handle_array) => {
            cy.wrap($data_cell_handle_array[$el])
              .type(value_to_type)

            let section_1_calculated_column_totals_length = this.section_1_calculated_column_totals.length;
            let section_1_previous_total = this.section_1_calculated_column_totals[section_1_calculated_column_totals_length - 1];
            let section_1_new_total;

            cy.log('section_1_calculated_column_totals: before: ' + this.section_1_calculated_column_totals)
            cy.log('section_1_previous_total: before: ' + section_1_previous_total)
            section_1_new_total = section_1_previous_total + value_to_type;
            this.section_1_calculated_column_totals.push(section_1_new_total);


            cy.log('section_1_calculated_column_totals: after: ' + this.section_1_calculated_column_totals)
          })


      })

    let section_1_hour_total_index = 102

    cy.get('@data_cell_handle_array')
      .then(($data_cell_handle_array) => {

        cy.get('@section_1_calculated_column_totals')
          .then(($section_1_calculated_column_totals) => {
            let section_1_calculated_column_totals_length = $section_1_calculated_column_totals.length;
            let calculated_total = $section_1_calculated_column_totals[section_1_calculated_column_totals_length - 1];
            let displayed_total = $data_cell_handle_array[section_1_hour_total_index].text()
            cy.log()
            expect(displayed_total).to.equal('' + calculated_total)

          })
      })

      //----------------------------------------------------------------------------------

      //----------------------------------------------------------------------------------
    //validate section_2 section
    const section_2_column_start_index = 84
    const number_of_section_2_params = 2; //not including section_2 title row

    let section_2_column_cell_indices = [];
    let section_2_current_column_cell_index = section_2_column_start_index;

    //let value_to_type = 2

    for (let i = 0; i < number_of_section_2_params; i++) {
      section_2_column_cell_indices.push(section_2_current_column_cell_index);
      section_2_current_column_cell_index = section_2_current_column_cell_index + 9
    }

    cy.wrap(section_2_column_cell_indices).as('section_2_column_cell_indices')


    let section_2_calculated_column_totals = [];
    section_2_calculated_column_totals[0] = 0;

    cy.wrap(section_2_calculated_column_totals).as('section_2_calculated_column_totals');


    cy.get('@section_2_column_cell_indices')
      .each(function ($el, index, $list) {
        cy.log('section_2_current_column_cell_index: ' + $el)

        cy.get('@data_cell_handle_array')
          .then(($data_cell_handle_array) => {
            cy.wrap($data_cell_handle_array[$el])
              .type(value_to_type)

            let section_2_calculated_column_totals_length = this.section_2_calculated_column_totals.length;
            let section_2_previous_total = this.section_2_calculated_column_totals[section_2_calculated_column_totals_length - 1];
            let section_2_new_total;

            cy.log('section_2_calculated_column_totals: before: ' + this.section_2_calculated_column_totals)
            cy.log('section_2_previous_total: before: ' + section_2_previous_total)
            section_2_new_total = section_2_previous_total + value_to_type;
            this.section_2_calculated_column_totals.push(section_2_new_total);


            cy.log('section_2_calculated_column_totals: after: ' + this.section_2_calculated_column_totals)
          })


      })

    let section_2_hour_total_index = 111

    cy.get('@data_cell_handle_array')
      .then(($data_cell_handle_array) => {

        cy.get('@section_2_calculated_column_totals')
          .then(($section_2_calculated_column_totals) => {
            let section_2_calculated_column_totals_length = $section_2_calculated_column_totals.length;
            let calculated_total = $section_2_calculated_column_totals[section_2_calculated_column_totals_length - 1];
            let displayed_total = $data_cell_handle_array[section_2_hour_total_index].text()
            cy.log()
            expect(displayed_total).to.equal('' + calculated_total)

          })
      })

  })

  /*it('Test Scenario 03 : Column 1 : Total', () => {


  })

  it('Test Scenario 04 : Column 2 : Total', () => {


  })*/


})