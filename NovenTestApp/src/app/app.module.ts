import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { UsersContainerComponent } from './users-container/users-container.component';
import { UsresListComponent } from './components/usres-list/usres-list.component';
import { SelectedUserComponent } from './components/selected-user/selected-user.component';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsresListComponent,
    SelectedUserComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
