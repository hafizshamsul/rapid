import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
//import { IOSFilePicker } from '@ionic-native/file-picker';


@Injectable({
  providedIn: 'root'
})
export class ImagesProvider {

  private _READER: any = new FileReader();
  private _REMOTE_URI: string = "http://192.168.0.137/rapidkl/upload_api/parse-upload.php";


  constructor(private http: HttpClient) { }

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

  uploadImageSelection(file: string, mimeType: string): Observable<any> {
    let headers: any = new Headers({'Content-Type' : 'application/octet-stream'}),
    fileName: any = Date.now() + '.' + mimeType,
    options: any = { "name" : fileName, "file" : file };

    return this.http.post(this._REMOTE_URI, JSON.stringify(options), headers);

    //return this.http.post(this.server + file, JSON.stringify(body), options).pipe(map(res=>res.json()));
  }

}
