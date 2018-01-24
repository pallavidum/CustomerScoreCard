import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import { User } from './../../interfaces/user.interface'

@Injectable()
export class UserManagementService{

    constructor(private http:HttpClient){

    }
    getAllUsers(){
        return this.http.get('http://dev.score.vp/api/usermanagement/GetUsers');
    }
    getAllPlants(){
        return this.http.get('http://dev.score.vp/api/plant/GetPlants');
    }
    addUser(user:User){
        return this.http.get('http://dev.score.vp/api/usermanagement/Add');
    }
}