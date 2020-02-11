import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular with Cypress';

columnDefs = [
  {headerName: 'Item Name', field: 'item_name', editable: true },
  {headerName: 'Jan', field: 'volume_jan', editable: true},
  {headerName: 'Feb', field: 'volume_feb', editable: true},
  {headerName: 'Mar', field: 'volume_mar', editable: true},
  {headerName: 'Apr', field: 'volume_apr', editable: true},
  {headerName: 'May', field: 'volume_may', editable: true},
  {headerName: 'Jun', field: 'volume_jun', editable: true},
  {headerName: 'Jul', field: 'volume_jul', editable: true},
  {headerName: 'Total', field: 'total', editable: true},
];

rowData = [
  { item_name: 'Coca Cola', volume_jan: '', volume_feb: '', volume_mar: '', volume_apr: '', volume_may: '', volume_jun: '', volume_jul: '', total: '' },
  { item_name: 'Pepsi', volume_jan: '', volume_feb: '', volume_mar: '', volume_apr: '', volume_may: '', volume_jun: '', volume_jul: '', total: '' },
  { item_name: 'Sprite', volume_jan: '', volume_feb: '', volume_mar: '', volume_apr: '', volume_may: '', volume_jun: '', volume_jul: '', total: '' },
  { item_name: 'Fanta', volume_jan: '', volume_feb: '', volume_mar: '', volume_apr: '', volume_may: '', volume_jun: '', volume_jul: '', total: '' },
  { item_name: 'Bisleri', volume_jan: '', volume_feb: '', volume_mar: '', volume_apr: '', volume_may: '', volume_jun: '', volume_jul: '', total: '' },
  { item_name: 'Aquafina', volume_jan: '', volume_feb: '', volume_mar: '', volume_apr: '', volume_may: '', volume_jun: '', volume_jul: '', total: '' },
];

}
