import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NavController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";
//import { IOSFilePicker } from '@ionic-native/file-picker';
//import { DocumentPicker } from '@ionic-native/document-picker/ngx';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  //@ViewChild('nav',  {static: false}) nav: NavController;
  //@ViewChild('displayAlert',  {static: false}) displayAlert: AlertController;
  
  customers: any = [];
  limit: number = 10;
  start: number = 0;

  /*name_customer: string = "";
  desc_customer: string = "";
  id: number;*/


  private _SUFFIX : string;
  public image : string;
  public isSelected : boolean =	false;

  name: string = "l";
  decoded: string = "l";
  id: number;

  constructor(
    //private docPicker: DocumentPicker,
    //private filePicker: IOSFilePicker, 
    private actRoute: ActivatedRoute,
    public alertCtrl: AlertController, private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.name = data.name;
      this.decoded = data.decoded;
      console.log(data);
    });
    /*
    this.actRoute.params.subscribe((data: any) =>{
      this.id = data.id;
      this.name_customer = data.name;
      this.desc_customer = data.desc;
      console.log(data);
    });*/
  }

  /*async createdProcess(){
    return new Promise(resolve => {
      let body = {
        action: 'add',
        name: this.name,
        decoded: this.decoded,
      };
      this._IMAGES.posting(body, 'parse-upload.php').subscribe(data=>{
        this.router.navigate(['/customer']);
        console.log('OK');
      });
    });
  }*/

  fails: any = [];
  
  file: any;
  lol: String = "25 Jan 2020";
  private files: any[] = [
    {
      "name": "Chapter 1",
      "type": "pdf_color.svg",
      "id": "1"
    },

    {
      "name": "Chapter 2",
      "type": "pdf_color.svg",
      "id": "2"
    },

    {
      "name": "Chapter 3",
      "type": "pdf_color.svg",
      "id": "3"
    },

    {
      "name": "Chapter 4",
      "type": "pdf_color.svg",
      "id": "4"
    },
  
    {
      "name": "Chapter 5",
      "type": "pdf_color.svg",
      "id": "5"
    },

    {
      "name": "Image 1",
      "type": "images_color.svg",
      "id": "6"
    },

    {
      "name": "Image 2",
      "type": "images_color.svg",
      "id": "7"
    },

    {
      "name": "CLP Course",
      "type": "doc_color.svg",
      "id": "8"
    },

    {
      "name": "Project Rubric",
      "type": "doc_color.svg",
      "id": "9"
    }
  ];

  selectFileToUpload(event) : void {
    this._IMAGES.handleImageSelection(event).subscribe((res) => {
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];

        if(this._IMAGES.isCorrectFileType(this._SUFFIX)) {
          this.isSelected = true;
          this.image = res;
        }
        else {
          this.displayAlert('You need to select an image file with one of the following types: jpg, gif or png');
        }
      },
      (error) => {
        console.dir(error);
        this.displayAlert(error.message);
      });
    }
   
   uploadFile() : void {
    this.name = Date.now() + '.' + this._SUFFIX;
    let body: any = {
      action : "add" ,
      name : this.name,
      file : this.image,
      rename : "kehkeh.png"
    };  
    
      this._IMAGES.uploadImageSelection(
        body
        //this.image, this._SUFFIX
        ).subscribe((res) => {        
        

        this.displayAlert(res.message);
        //this.createdProcess();
      },
      (error : any) => {
         console.dir(error);
         this.displayAlert(error.message);
      });
   }

   
  /*async createdProcess(){
    return new Promise(resolve => {
      let body = {
        action: 'added',
        name: this.name,
        decoded: this.decoded,
      };
      this._IMAGES.posting(body, 'parse-upload.php').subscribe(data=>{
        this.router.navigate(['/loginform']);
        console.log('OK');
      });
    });
  }*/

   async presentAlert() {
    let alert : any = await this.alertCtrl.create({
    message: 'Low battery',
    subHeader: '10% of battery remaining',
    buttons: ['Dismiss']
   });
   await alert.present(); 
  }

   async displayAlert(message : string) {
      let alert : any = await this.alertCtrl.create({
        header 		: 'Heads up!',
        subHeader 	: message,
        buttons 	: ['Got it']
      });
      alert.present();
   }

   /*
   loadFile(){
    return new Promise(resolve => {
      let body = {
        action : 'getdata',
      };
      this._IMAGES.posting(body, 'parse-upload.php').subscribe(data => {
        for(let customer of data.result){
          this.files.push(customer);
        }
        resolve(true);
      });
    });
  }*/
   

  ionViewWillEnter(){
    this.customers = [];
    this.start = 0;
    this.loadCustomer();
  }

  addCustomer(){
    this.router.navigate(['/addcustomer']);
  }

  updateCustomer(id, name, desc){
    this.router.navigate(['/addcustomer/'+id+'/'+name+'/'+desc]);
  }

  showCustomer(id, name, desc){
    this.router.navigate(['/showcustomer/'+id+'/'+name+'/'+desc]);
  }

  home(){
    this.router.navigate(['/homepage']);
  }

  customer(){
    this.router.navigate(['/customer']);
  }

  loginform(){
    this.router.navigate(['/loginform']);
  }

  doRefresh(event){
    setTimeout(()=>{
      this.ionViewWillEnter();
      event.target.complete();
    }, 140);
  }

  loadData(event:any){
    this.start += this.limit;
    this.loadCustomer().then(()=>{
      event.target.complete();
    });
  }

  delCustomer(id){
    let body = {
      action : 'delete',
      customer_id: id
    };

    this.postprovider.postData(body, 'process-api.php').subscribe(data => {
      this.ionViewWillEnter();
    });
  }

  loadCustomer(){
    return new Promise(resolve => {
      let body = {
        action : 'getdata',
        limit : this.limit,
        start : this.start,
      };

      this.postprovider.postData(body, 'process-api.php').subscribe(data => {
        for(let customer of data.result){
          this.customers.push(customer);
        }
        resolve(true);
      });
    });
  }
}