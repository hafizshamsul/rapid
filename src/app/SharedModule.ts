import { NgModule } from '@angular/core';
import { StripHtmlPipe } from '../app/striphtml.pipe';
import { SafeHtmlPipe } from '../app/safe-html.pipe';
import { SafePipe } from '../app/safe.pipe';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AhelloComponent } from './ahello/ahello.component';
import { AtabComponent } from './atab/atab.component';

@NgModule({
    imports: [
        CommonModule, IonicModule
    ],
    declarations: [
        StripHtmlPipe, SafeHtmlPipe, SafePipe, AhelloComponent, AtabComponent
    ],
    exports: [
        StripHtmlPipe, SafeHtmlPipe, SafePipe, AhelloComponent, AtabComponent
    ]
})
export class SharedModule {}