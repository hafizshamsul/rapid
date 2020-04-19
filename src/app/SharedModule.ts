import { NgModule } from '@angular/core';
import { StripHtmlPipe } from '../app/striphtml.pipe';
import { SafeHtmlPipe } from '../app/safe-html.pipe';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StripHtmlPipe, SafeHtmlPipe
    ],
    exports: [
        StripHtmlPipe, SafeHtmlPipe
    ]
})
export class SharedModule {}