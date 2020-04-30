import { NgModule } from '@angular/core';
import { StripHtmlPipe } from '../app/striphtml.pipe';
import { SafeHtmlPipe } from '../app/safe-html.pipe';
import { SafePipe } from '../app/safe.pipe';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StripHtmlPipe, SafeHtmlPipe, SafePipe
    ],
    exports: [
        StripHtmlPipe, SafeHtmlPipe, SafePipe
    ]
})
export class SharedModule {}