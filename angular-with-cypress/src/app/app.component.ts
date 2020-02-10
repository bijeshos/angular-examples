import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-n-cypress-v02';

columnDefs = [
  {headerName: 'Meta 1', field: 'meta_1', editable: true },
  {headerName: 'Meta 2', field: 'meta_2', editable: true },
  {headerName: 'Meta 3', field: 'meta_3', editable: true},
  {headerName: 'Value 1', field: 'value_1', editable: true},
  {headerName: 'Value 2', field: 'value_2', editable: true},
  {headerName: 'Value 3', field: 'value_3', editable: true},
  {headerName: 'Value 4', field: 'value_4', editable: true},
  {headerName: 'Value 5', field: 'value_5', editable: true},
  {headerName: 'Value 6', field: 'value_6', editable: true},
  
  {headerName: 'Total', field: 'total', editable: true},
];

rowData = [
  { meta_1:'', meta_2: 'Section-1', meta_3: '', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '' },
  { meta_1:'', meta_2: 'Item-A1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '10' },
  { meta_1:'', meta_2: 'Item-B1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Item-C1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Item-D1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Item-E1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Item-F1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Item-G1', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Section-2', meta_3: '', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '' },
  { meta_1:'', meta_2: 'Item-H2', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Item-I2', meta_3: 'xyz', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '5' },
  { meta_1:'', meta_2: 'Section-1 Total', meta_3: 'xyz', value_1: '14', value_2: '7', value_3: '7', value_4: '7', value_5: '7', value_6: '7', total: '35' },
  { meta_1:'', meta_2: 'Section-2 Total', meta_3: 'xyz', value_1: '4', value_2: '2', value_3: '2', value_4: '2', value_5: '2', value_6: '2', total: '4' },
  { meta_1:'', meta_2: 'Balance', meta_3: 'xyz', value_1: '5', value_2: '5', value_3: '5', value_4: '5', value_5: '5', value_6: '5', total: '31' },
];

}
