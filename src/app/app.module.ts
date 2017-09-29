import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule }     from "@angular/forms";
import { ProductFormControl }   from "./model/form.model";
import { ProductFormGroup }     from "./model/form.group";
import { ModelModule }      from "./model/model.module";
import { CommonModule }     from "./common/common.module";
import { ComponentModule }  from "./components/component.module";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule, 
                  ModelModule, CommonModule, ComponentModule ], 
    declarations:   [ ProductComponent ], 
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }