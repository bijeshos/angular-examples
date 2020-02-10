/// <reference types="Cypress" />


context('Ag Grid Page - Tests', () => {

  let sections_test_config = {};

  before(() =>{

    cy.log('inside before')

    cy.fixture('sections_test_config').then((data) => {
      sections_test_config = data;
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });

  })

  beforeEach(()=>{
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
        cy.log('header-text['+index+']: '+$el.find("span").text())
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

        cy.log('data-text['+index+']: '+$el.text())

        cy.wrap(sections_test_config.params)
          .each(function ($el2, index2, $list2) {
            if ( ($el2.row_type != 'total_count_row') && ($el2.observation == $el.text().trim()) ) {
              data_meta_present.push($el.text())

              //this is to keep track of section_1/section_2 separately
              if($el2.param_category == 'section_1'){
                data_section_1_meta_present.push($el.text())
              }else if ($el2.param_category == 'section_2'){
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

  it.skip('Test Scenario 01 : Row 1 : Total - v1', () => {

    let calculated_column_totals_array = [];
    calculated_column_totals_array[0] = 0;

    cy.wrap(calculated_column_totals_array).as('calculated_column_totals_array');

    cy.get('@data_cell_handle_array')
      .each(function ($el, index, $list) {
        //const param_order = 1; //starts from 0; Section_1 title_row is considered as 0

        //const param_block_end_index = this.data_meta_present.length * 3 - 1;
        //const param_block_end_index = 2;
        //const no_of_value_columns = this.header_text_array.length - 3;
        //const no_of_previous_value_cells = no_of_value_columns * param_order;
        
        //const value_cell_start_index = this.data_meta_present.length*3 + (this.header_text_array.length-3)*param_order;
        const value_cell_start_index = 12;
        const value_cell_end_index = 16;
        const total_count_cell_index = 17;
        //cy.log('value_cell_start_index: '+value_cell_start_index
         //   +', value_cell_end_index:'+value_cell_end_index
         //   +', total_count_cell_index: '+total_count_cell_index);
        cy.log('------------')
         cy.log('current index: '+index)   
  
        let total_array_length = this.calculated_column_totals_array.length;
        let previous_total = this.calculated_column_totals_array[total_array_length-1];
        let new_total;
        
        const value_to_type = 2;

        if (index >= value_cell_start_index && index <= value_cell_end_index) {
          cy.log('typing at index: '+index)
          cy.wrap($el)
            //.log('value['+index+']: '+$el.text())
            .type('{backspace}')  //this is to avoid appending to the existing value
            .type('{backspace}')
            .type('{backspace}')
            .type('{backspace}')
            .type('{backspace}')
            .type(value_to_type)
            .type('{enter}')
           
            cy.log('calculated_column_totals_array: before: '+calculated_column_totals_array)
            cy.log('previous_total: before: '+previous_total)
            new_total = previous_total +  value_to_type;
            this.calculated_column_totals_array.push(new_total);

            //cy.wrap(expected_total).as('current_total');

            cy.log('calculated_column_totals_array: after: '+calculated_column_totals_array)
            
        }else if(index == total_count_cell_index){
          let total_in_screen = $el.text();
          cy.log('total_in_screen: '+total_in_screen)
          cy.log('calculated_total: '+previous_total)
          
          expect(total_in_screen).to.equal(''+previous_total)
          //return false // to skip rest of the loop
                
        }
        else{
          //cy.log('skipping index: '+index)
        }
      })

  })


  it('Test Scenario 01 : Row 1 : Total - v2', () => {
    
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
          cy.log('current_row_cell_index: '+$el)          

          cy.get('@data_cell_handle_array')
            .then(($data_cell_handle_array)=>{              
              cy.wrap($data_cell_handle_array[$el])
              .type(value_to_type)

              let calculated_row_totals_length = this.calculated_row_totals.length;
              let previous_total = this.calculated_row_totals[calculated_row_totals_length-1];
              let new_total;

              cy.log('calculated_row_totals: before: '+this.calculated_row_totals)
              cy.log('previous_total: before: '+previous_total)
              new_total = previous_total +  value_to_type;
              this.calculated_row_totals.push(new_total);

              cy.log('calculated_row_totals: after: '+this.calculated_row_totals)
            })


      })

      let row_total_index = 17

      cy.get('@data_cell_handle_array')
        .then(($data_cell_handle_array)=>{       
              cy.get('@calculated_row_totals')
                .then(($calculated_row_totals)=>{
                  let calculated_row_totals_length = $calculated_row_totals.length;
                  let latest_calculated_total = $calculated_row_totals[calculated_row_totals_length-1];
                  let displayed_total = $data_cell_handle_array[row_total_index].text()
                  cy.log()
                  expect(displayed_total).to.equal(''+latest_calculated_total)

                })
      })

  })

  it.skip('Test Scenario 02 : Column 1 : Total', () => {
    //const hour_column_order = 1  
    const column_start_index = 12//3
    const number_of_hour_columns = 5
    const number_of_section_1_params = 7; //not including section_1 title row

    let hour_column_index = [];
    let current_column_index = column_start_index;

    let value_to_type = 2

    for (let i = 0; i < number_of_section_1_params; i++) {
      hour_column_index.push(current_column_index);
      current_column_index = current_column_index + 9      
    }

    cy.wrap(hour_column_index).as('hour_column_index')

    //cy.get(this.hour_column_index)
    //.log(this.hour_column_index)

    //let column_value_array = []
    //let displayed_column_total_array = []
    
    let calculated_column_totals_array = [];
    calculated_column_totals_array[0] = 0;

    cy.wrap(calculated_column_totals_array).as('calculated_column_totals_array');

    //cy.wrap(displayed_column_total_array).as('displayed_column_total_array');

    cy.get('@hour_column_index')
      .each(function ($el, index, $list) {
          cy.log('column_index: '+$el)          

          cy.get('@data_cell_handle_array')
            .then(($data_cell_handle_array)=>{              
              cy.wrap($data_cell_handle_array[$el])
              .type(value_to_type)

              let total_array_length = this.calculated_column_totals_array.length;
              let previous_total = this.calculated_column_totals_array[total_array_length-1];
              let new_total;

              cy.log('calculated_column_totals_array: before: '+this.calculated_column_totals_array)
              cy.log('previous_total: before: '+previous_total)
              new_total = previous_total +  value_to_type;
              this.calculated_column_totals_array.push(new_total);

              //cy.wrap(expected_total).as('current_total');

              cy.log('calculated_column_totals_array: after: '+this.calculated_column_totals_array)
            })


      })

      let section_1_hour_total_index = 102

      cy.get('@data_cell_handle_array')
        .then(($data_cell_handle_array)=>{       
          //cy.get('@displayed_column_total_array')
            //.then(($displayed_column_total_array)=>{
              //$displayed_column_total_array[0] = $data_cell_handle_array[section_1_hour_total_index].text()

              cy.get('@calculated_column_totals_array')
                .then(($calculated_column_totals_array)=>{
                  let total_array_length = $calculated_column_totals_array.length;
                  let calculated_total = $calculated_column_totals_array[total_array_length-1];
                  let displayed_total = $data_cell_handle_array[section_1_hour_total_index].text()
                  cy.log()
                  expect(displayed_total).to.equal(''+calculated_total)

                })
            //})
      })

  })

  /*it('Test Scenario 03 : Column 1 : Total', () => {


  })

  it('Test Scenario 04 : Column 2 : Total', () => {


  })*/


})