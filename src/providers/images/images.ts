import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
//import { IOSFilePicker } from '@ionic-native/file-picker';
import { map } from 'rxjs/operators';

import { Plugins } from '@capacitor/core';
const { Camera } 		= Plugins;

@Injectable({
  providedIn: 'root'
})
export class ImagesProvider {
  /*postData(body: { action: string; name: string; decoded: string; }, arg1: string) {
    throw new Error("Method not implemented.");
  }*/

  private _READER: any = new FileReader();
  private _REMOTE_URI: string = "http://192.168.0.137/rapidkl/rapid/upload_api/parse-upload.php";

  constructor(private http: HttpClient,
    public htt: Http
    ) { }

  handleImageSelection(event : any){
    let file: any = event.target.files[0];
    console.log(event.target.files[0].name);
    this._READER.readAsDataURL(file);
    
    return Observable.create((observer) => {
        this._READER.onloadend = () => {
          console.log(this._READER.result as string);
          observer.next(this._READER.result as string);
          
          observer.complete();
        }
    });
  }

  isCorrectFileType(file) {
    return (/^(docx|doc|pptx|ppt|xlsx|xls|mdb|ai|bmp|gif|jpeg|png|psd|svg|tiff|pdf|gif|pdf|jpg|jpeg|png|txt|zip)$/i).test(file);
  }

  uploadImageSelection(body: any): Observable<any> {
    let type = "application/json; charset=UTF-8";
    let headers: any = new Headers({'Content-Type' : type});
    let options = new RequestOptions({headers: headers});

    return this.htt.post(this._REMOTE_URI, JSON.stringify(body), options).pipe(map(res=>res.json()));
  }
}