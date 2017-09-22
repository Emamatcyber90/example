import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./product/product.component";
import { FormsModule, ReactiveFormsModule }     from "@angular/forms";
import { ProductFormControl }   from "./model/form.control";
import { ProductFormGroup }     from "./model/form.group";
import { PaAttrDirective }      from "./directive/attr.directive";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule ], 
    declarations:   [ ProductComponent, PaAttrDirective ], 
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }