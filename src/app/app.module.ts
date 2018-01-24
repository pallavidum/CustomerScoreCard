import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './app.routes'
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
//
import { CorporateComponent } from './components/corporate/corporate.component';
import { ManagementComponent } from './components/management/management.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppComponent } from './app.component';

import { CorporateService } from './components/corporate/corporate.component.service';
import { ModalComponent } from './components/modal/modal.component';
import { UserManagementComponent } from './components/user-management/user-management.component'
import { UserManagementService } from './components/user-management/user-management.component.service';
import { AddUserComponent } from './components/add-user/add-user.component'

@NgModule({
  declarations: [
    AppComponent, CorporateComponent, ManagementComponent, NavbarComponent, ModalComponent, UserManagementComponent, AddUserComponent
  ],
  imports: [
    BrowserModule, RoutingModule, HttpModule, HttpClientModule, CommonModule, FormsModule, NgbModule.forRoot()
  ],
  entryComponents: [ModalComponent,AddUserComponent],
  providers: [CorporateService, UserManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
