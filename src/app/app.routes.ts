import {RouterModule,Routes} from '@angular/router';
import {CorporateComponent} from './components/corporate/corporate.component'
import {ManagementComponent} from './components/management/management.component'
import { UserManagementComponent } from './components/user-management/user-management.component'


export const routes:Routes=[
    {path:"corporate",component:CorporateComponent},
    {path:"marks/:id",component:ManagementComponent},
    {path:"management",component:ManagementComponent},
    {path:"user-management",component:UserManagementComponent}
];


export const RoutingModule=RouterModule.forRoot(routes);