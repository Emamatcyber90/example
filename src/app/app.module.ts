import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./product/product.component";
import { FormsModule, ReactiveFormsModule }     from "@angular/forms";
import { ProductFormControl }   from "./model/form.control";
import { ProductFormGroup }     from "./model/form.group";
import { PaAttrDirective }      from "./directive/attr.directive";
import { PaModel }              from "./directive/twoway.directive";
import { PaStructureDirective } from "./directive/structure.directive";
import { PaIteratorDirective }  from "./directive/iterator.directive";
import { PaCellColor }          from "./directive/cellColor.directive";
import { PaCellColorSwitcher }  from "./directive/cellColorSwitcher.directive";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule ], 
    declarations:   [ ProductComponent, PaAttrDirective, PaModel, 
                      PaStructureDirective, PaIteratorDirective, 
                      PaCellColor, PaCellColorSwitcher ], 
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }