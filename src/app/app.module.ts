import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ListComponent } from './list/list.component';
import { routing } from './app.routing';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwPaginationComponent } from 'jw-angular-pagination';
import {NgxPaginationModule} from 'ngx-pagination';
// search module
// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ListComponent,
    FilterPipe,
    JwPaginationComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
