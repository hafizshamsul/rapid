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

    handleImageSelection(event : any) : Observable<any> {
        let file: any = event.target.files[0];
    
        this._READER.readAsDataURL(file);
        return Observable.create((observer) => {
            this._READER.onloadend = () => {
              observer.next(this._READER.result);
              observer.complete();
            }
        });
      }
    
    isCorrectFileType(file) {
    return (/^(gif|pdf|jpg|jpeg|png)$/i).test(file);
    }

    postData(body, file){
        let type = "application/json; charset=UTF-8";
        let headers = new Headers({'Content-Type': type});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.server + file, JSON.stringify(body), options).pipe(map(res=>res.json()));
    }
}