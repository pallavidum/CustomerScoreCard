import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class CorporateService {
  constructor(
    private http: HttpClient
  ) { }

  getList() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }

  getPendingRec(){
    //let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    // let options = new RequestOptions({ headers: headers});


    let headersCors = new HttpHeaders();
    headersCors= headersCors.set('Access-Control-Allow-Origin','*')
    headersCors= headersCors.set('Access-Control-Allow-Headers','*')
    // headersCors= headersCors.set('Accept','application/json')
     headersCors= headersCors.set('Content-Type','application/json')
    // var requestOptions = new RequestOptions({headers:headersCors});
    
    // headers.append('Access-Control-Allow-Origin', '*');
    // headers.append('Access-Control-Allow-Headers', '*');
    // headers.append('Accept', 'application/json');
    // headers.append('Content-Type', 'application/json');
    return this.http.get('http://dev.score.vp/api/search/GetPendingWork?userRole=/corporate&plantIds=null');
  }

}