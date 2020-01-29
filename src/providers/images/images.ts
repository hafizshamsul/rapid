import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { IOSFilePicker } from '@ionic-native/file-picker';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImagesProvider {
  postData(body: { action: string; name: string; decoded: string; }, arg1: string) {
    throw new Error("Method not implemented.");
  }

  private _READER: any = new FileReader();
  private _REMOTE_URI: string = "http://192.168.0.137/rapidkl/rapid/upload_api/parse-upload.php";
  //server: string = "http://192.168.0.137/rapidkl/upload_api/uploads";
  
  //server: string = "http://192.168.0.137/rapidkl/upload_api/";
  //server: string = "http://192.168.0.137/rapidkl/rapid/";


  constructor(private http: HttpClient,
    public htt: Http
    ) { }

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

  uploadImageSelection(
    body: any
    //file: string, mimeType: string
    ): Observable<any> {
    //let fileName: any = Date.now() + '.' + mimeType;

    let type = "application/json; charset=UTF-8";
    let headers: any = new Headers({'Content-Type' : type});
    //let body: any = {"action" : "add" , "name" : "lolol", "file" : "lolol", "rename" : "kehkeh.png" };
    let options = new RequestOptions({headers: headers});

    //return this.http.post(this._REMOTE_URI, JSON.stringify(options), headers);
    return this.htt.post(this._REMOTE_URI, JSON.stringify(body), options).pipe(map(res=>res.json()));
  }

  /*posting(body, file){
    let type = "application/json; charset=UTF-8";
    let headers = new Headers({'Content-Type': type});
    let options = new RequestOptions({headers: headers});
    return this.htt.post(this.server + file, JSON.stringify(body), options).pipe(map(res=>res.json()));
  }*/
}