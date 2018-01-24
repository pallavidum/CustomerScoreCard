import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Permission } from './../../interfaces/permission.interface'
import { Plant } from './../../interfaces/plant.interface'
import { User } from './../../interfaces/user.interface'

import { UserManagementService } from './../user-management/user-management.component.service'


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private userManagementService: UserManagementService) { }
  // @ViewChild('userForm')//to get form object either we can use viewchild or ngForm
  // userForm:NgForm;
  listOfPlants: Plant[];
  listOfPermissions: Permission[];
  name: string;
  email: string;
  password: string;
  permissions: string[];
  plants: string[];
  confirmPassword: string;
  user: User;
  ngOnInit() {
  }
  closeModal() {
    this.activeModal.close();
  }
  // addUser(userForm:NgForm){
  //   console.log(userForm);
  // }

  addUser(userForm: NgForm) {
    console.log(userForm);
    console.log(this.name);
    console.log(this.email);
    console.log(this.permissions);
    console.log(this.plants);
    const user:User={
      id:5,
      name: this.name,
      email: this.email,
      permissions: this.permissions,
      plantIds: this.plants,
      addressIds: [],
      empId: 2323,
    };
    this.userManagementService.addUser(user).subscribe((resp)=>{

      
    });

  }
  updatePermission() {

  }
  updatePlants() {

  }
}
