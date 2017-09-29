import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule }     from "@angular/forms";
import { ProductFormControl }   from "./model/form.model";
import { ProductFormGroup }     from "./model/form.group";
import { ProductTableComponent }    from "./component/productTable/productTable.component";
import { ProductFormComponent }     from "./component/productForm/productForm.component";
import { PaToggleView }         from "./component/toggleView/toggleView.component";
import { PaDiscountDisplayComponent }   from "./component/discount/discountDisplay.component";
import { PaDiscountEditorComponent }    from "./component/discount/discountEditor.component";
import { ModelModule }      from "./model/model.module";
import { CommonModule }     from "./common/common.module";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule ], 
    declarations:   [ ProductComponent, 
                      ProductTableComponent, ProductFormComponent, 
                      PaToggleView,
                      PaDiscountDisplayComponent, PaDiscountEditorComponent ], 
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }