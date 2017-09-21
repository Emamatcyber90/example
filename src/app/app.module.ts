import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./product/product.component";
import { FormsModule, ReactiveFormsModule }     from "@angular/forms";
import { ProductFormControl }   from "./model/form.control";
import { ProductFormGroup }     from "./model/form.group";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule ], 
    declarations:   [ ProductComponent, ProductFormControl, ProductFormGroup ], 
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }