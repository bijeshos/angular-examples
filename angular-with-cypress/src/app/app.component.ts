import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-n-cypress-v02';

  /*columnDefs = [
    {headerName: 'Make', field: 'make', editable: true },
    {headerName: 'Model', field: 'model', editable: true },
    {headerName: 'Price', field: 'price', editable: true},
    {headerName: 'Year', field: 'year', editable: true},
];*/

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

/*
rowData = [
  { meta_1:'', meta_2: 'Section-1', meta_3: '', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '' },
  { meta_1:'', meta_2: 'Item-A1', meta_3: 'xyz', value_1: '101', value_2: '102', value_3: '103', value_4: '104', value_5: '105', value_6: '106', total: '5' },
  { meta_1:'', meta_2: 'Item-B1', meta_3: 'xyz', value_1: '201', value_2: '202', value_3: '203', value_4: '204', value_5: '205', value_6: '206', total: '207' },
  { meta_1:'', meta_2: 'Item-C1', meta_3: 'xyz', value_1: '301', value_2: '302', value_3: '303', value_4: '304', value_5: '305', value_6: '306', total: '307' },
  { meta_1:'', meta_2: 'Item-D1', meta_3: 'xyz', value_1: '401', value_2: '402', value_3: '403', value_4: '404', value_5: '405', value_6: '406', total: '407' },
  { meta_1:'', meta_2: 'Item-E1', meta_3: 'xyz', value_1: '501', value_2: '502', value_3: '503', value_4: '504', value_5: '505', value_6: '506', total: '507' },
  { meta_1:'', meta_2: 'Item-F1', meta_3: 'xyz', value_1: '601', value_2: '602', value_3: '603', value_4: '604', value_5: '605', value_6: '606', total: '607' },
  { meta_1:'', meta_2: 'Item-G1', meta_3: 'xyz', value_1: '701', value_2: '702', value_3: '703', value_4: '704', value_5: '705', value_6: '706', total: '707' },
  { meta_1:'', meta_2: 'Section-2', meta_3: '', value_1: '', value_2: '', value_3: '', value_4: '', value_5: '', value_6: '', total: '' },
  { meta_1:'', meta_2: 'Item-H2', meta_3: 'xyz', value_1: '901', value_2: '902', value_3: '903', value_4: '904', value_5: '905', value_6: '906', total: '907' },
  { meta_1:'', meta_2: 'Item-I2', meta_3: 'xyz', value_1: '1001', value_2: '1002', value_3: '1003', value_4: '1004', value_5: '1005', value_6: '1006', total: '1007' },
  { meta_1:'', meta_2: 'Section-1 Total', meta_3: 'xyz', value_1: '1101', value_2: '1102', value_3: '1103', value_4: '1104', value_5: '1105', value_6: '1106', total: '1107' },
  { meta_1:'', meta_2: 'Section-2 Total', meta_3: 'xyz', value_1: '1201', value_2: '1202', value_3: '1203', value_4: '1204', value_5: '1205', value_6: '1206', total: '1207' },
  { meta_1:'', meta_2: 'Balance', meta_3: 'xyz', value_1: '1301', value_2: '1302', value_3: '1303', value_4: '1304', value_5: '1305', value_6: '1306', total: '1307' },
];*/


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
