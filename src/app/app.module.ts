import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { MainComponent } from './Components/main/main.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { CalendarComponent } from './Components/calendar/calendar.component';
import { TableComponent } from './Components/table/table.component';
import { NamePipe } from './Pipe/name.pipe';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    HomeComponent,
    NavbarComponent,
    CalendarComponent,
    TableComponent,
    NamePipe,
    
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
