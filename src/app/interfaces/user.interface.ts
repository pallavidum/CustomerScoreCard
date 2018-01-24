export interface User{
id:number;
name:string;
email:string;
userLevel?:string;
permissions:string[];
addressIds?:string[];
plantIds?:string[];
empId?:number;
isDeleted?:boolean;
}