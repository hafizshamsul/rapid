import { NgModule } from '@angular/core';
import { StripHtmlPipe } from '../app/striphtml.pipe';
import { SafeHtmlPipe } from '../app/safe-html.pipe';
import { SafePipe } from '../app/safe.pipe';
import { CommonModule } from '@angular/common';
import { AhelloComponent } from './ahello/ahello.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StripHtmlPipe, SafeHtmlPipe, SafePipe, AhelloComponent
    ],
    exports: [
        StripHtmlPipe, SafeHtmlPipe, SafePipe, AhelloComponent
    ]
})
export class SharedModule {}