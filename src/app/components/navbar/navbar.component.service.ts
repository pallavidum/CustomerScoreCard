import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {
  constructor (
    private http: HttpClient
  ) {}

  getList() {
    return this.http.get(`https://conduit.productionready.io/api/profiles/eric`);
  }

}