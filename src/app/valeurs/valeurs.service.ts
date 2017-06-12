import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ValeursService {

  // Resolve HTTP using the constructor
  constructor (private http: Http) {}

  getData(): Observable<Response> {
    return this.http.get('http://localhost:3000/test').map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

}
