import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./product/product.component";

@NgModule({
    imports:    [ BrowserModule ], 
    declarations:   [ ProductComponent ], 
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }