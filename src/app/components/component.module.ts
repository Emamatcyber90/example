import { NgModule }     from "@angular/core";
import { BrowserModule }                from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PaDiscountDisplayComponent }   from "./discount/discountDisplay.component";
import { PaDiscountEditorComponent }    from "./discount/discountEditor.component";
import { ProductFormComponent }         from "./productForm/productForm.component";
import { ProductTableComponent }        from "./productTable/productTable.component";
import { PaToggleView }                 from "./toggleView/toggleView.component";
import { ModelModule }                  from "../model/model.module";
import { CommonModule }                 from "../common/common.module";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule, CommonModule ],
    declarations: [ PaDiscountDisplayComponent, PaDiscountEditorComponent,
                    ProductFormComponent, ProductTableComponent, PaToggleView ],
    exports:    [ ProductFormComponent, ProductTableComponent ]
    })
export class ComponentModule {

}