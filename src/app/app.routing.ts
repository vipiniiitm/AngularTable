import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  { path: 'table', component: TableComponent },
  { path: 'list', component: ListComponent },
 
  {path : '', component : TableComponent}
];

export const routing = RouterModule.forRoot(routes);