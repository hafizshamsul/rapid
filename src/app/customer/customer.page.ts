import { Component, OnInit, ViewChild } from '@angular/core';
import { PostProvider } from '../../providers/post-provider';
import { Router } from '@angular/router';
import { AlertController, NavController } from 'ionic-angular';
import { ImagesProvider } from '../../providers/images/images';
import { HttpClient } from "@angular/common/http";



@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  @ViewChild('nav',  {static: false}) nav: NavController;
  @ViewChild('displayAlert',  {static: false}) displayAlert: AlertController;
  
  customers: any = [];
  limit: number = 10;
  start: number = 0;

  private _SUFFIX : string;
  public image : string;
  public isSelected : boolean =	false;

  constructor(private postprovider: PostProvider, private router: Router, private _IMAGES: ImagesProvider, private http: HttpClient) { }

  ngOnInit() {
  }

  selectFileToUpload(event) : void {
    this._IMAGES.handleImageSelection(event).subscribe((res) => {
        this._SUFFIX = res.split(':')[1].split('/')[1].split(";")[0];

        if(this._IMAGES.isCorrectFileType(this._SUFFIX)) {
          this.isSelected = true;
          this.image = res;
        }
        else {
          //this.displayAlert('You need to select an image file with one of the following types: jpg, gif or png');
        }
      },
      (error) => {
        console.dir(error);
        //this.displayAlert(error.message);
      });
    }
   
   uploadFile() : void {
      this._IMAGES.uploadImageSelection(this.image, this._SUFFIX).subscribe((res) => {
         //this.displayAlert(res.message);
      },
      (error : any) => {
         console.dir(error);
         //this.displayAlert(error.message);
      });
   }

   /*displayAlert(message : string) : void {
      let alert : any   = this._ALERT.create({
         title 		: 'Heads up!',
         subTitle 	: message,
         buttons 	: ['Got it']
      });
      alert.present();
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
