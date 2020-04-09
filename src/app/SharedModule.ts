import { NgModule } from '@angular/core';
import { StripHtmlPipe } from '../app/striphtml.pipe';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        StripHtmlPipe
    ],
    exports: [
        StripHtmlPipe
    ]
})
export class SharedModule {}