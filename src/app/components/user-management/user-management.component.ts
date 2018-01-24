import { Component, OnInit } from '@angular/core';
import { UserManagementService } from './user-management.component.service'
import { User } from './../../interfaces/user.interface'
import { Permission } from './../../interfaces/permission.interface'
import { Plant } from './../../interfaces/plant.interface'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'
import { AddUserComponent } from './../add-user/add-user.component'

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  listOfUsers: User[];
  listOfPlants: Plant[];

  selectedValue: string;
  permissions: Array<Permission> = [
    {
      id: 1, value: "PLANT", text: "Report New"
    },
    {
      id: 2, value: "CORPORATE", text: "Corporate"
    },
    {
      id: 3, value: "MANAGEMENT", text: "Management"
    },
    {
      id: 4, value: "DIVISION", text: "Division"
    },
    {
      id: 5, value: "VP-CUSTOMER", text: "VP-Customer"
    },
    {
      id: 6, value: "MANAGE-USERS", text: "User Management"
    },
    {
      id: 7, value: "SEVERITY", text: "Severity"
    }
  ];

  constructor(private userManagementService: UserManagementService, private modalService: NgbModal) { }

  ngOnInit() {

    this.userManagementService.getAllUsers().subscribe((response: User[]) => {
      this.listOfUsers = response;
      console.log(this.listOfUsers);
    });

    this.userManagementService.getAllPlants().subscribe((response: Plant[]) => {
      this.listOfPlants = response;
    });
  }

  updatePermission(value) {
    console.log(value);
  }


  updatePlants(value) {
    console.log(value);
  }

  addUser() {
    const modalRef =this.modalService.open(AddUserComponent, { size: 'lg' });
    modalRef.componentInstance.listOfPlants=this.listOfPlants;
    modalRef.componentInstance.listOfPermissions=this.permissions;
  }

  resetPassword() {

  }

}
