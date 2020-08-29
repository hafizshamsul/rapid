import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Headers, RequestOptions } from '@angular/http';

import { map } from 'rxjs/operators';

@Injectable()
export class PostProvider {
    private _READER: any = new FileReader();
    server: string = "http://192.168.0.137/rapidkl/rapid/server_api/";

    constructor(public http: Http){

    }

    postData(body, file){
        let type = "application/json; charset=UTF-8";
        let headers = new Headers({'Content-Type': type});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.server + file, JSON.stringify(body), options).pipe(map(res=>res.json()));
    }
}