import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';

import { HttpClientModule } from '@angular/common/http';
import { ImagesProvider } from '../providers/images/images';
//import { IOSFilePicker } from '@ionic-native/file-picker';
import { DocumentPicker } from '@ionic-native/document-picker/ngx';
import { DocumentViewer } from '@ionic-native/document-viewer/ngx';
import { QuillModule } from 'ngx-quill';

import { PreviewAnyFile } from '@ionic-native/preview-any-file/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, HttpModule, HttpClientModule, IonicModule.forRoot({animated: false}),
    AppRoutingModule, QuillModule.forRoot(
      {
        modules: {
          syntax: false
        }
      }
    )],
  providers: [
    StatusBar,
    SplashScreen,
    PostProvider,
    ImagesProvider,
    DocumentViewer,
    PreviewAnyFile,
    //DocumentPicker,
    //IOSFilePicker,
    //AlertController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
