import { NgModule }     from "@angular/core";
import { BrowserModule }    from "@angular/platform-browser";
import { ProductComponent } from "./component";
import { FormsModule, ReactiveFormsModule }     from "@angular/forms";
import { ProductFormControl }   from "./model/form.control";
import { ProductFormGroup }     from "./model/form.group";
import { PaAttrDirective }      from "./directive/attr.directive";
import { PaModel }              from "./directive/twoway.directive";
import { PaStructureDirective } from "./directive/structure.directive";
import { PaIteratorDirective }  from "./directive/iterator.directive";
import { PaCellColor }          from "./directive/cellColor.directive";
import { PaDiscountAmountDirective }    from "./directive/discountAmount.directive";
import { PaCellColorSwitcher }  from "./directive/cellColorSwitcher.directive";
import { ProductTableComponent }    from "./component/productTable/productTable.component";
import { ProductFormComponent }     from "./component/productForm/productForm.component";
import { PaToggleView }         from "./component/toggleView/toggleView.component";
import { PaAddTaxPipe }         from "./pipe/addTax.pipe";
import { PaCategoryFilterPipe } from "./pipe/categoryFilter.pipe";
import { PaDiscountPipe }       from "./pipe/discount.pipe";
import { PaDiscountDisplayComponent }   from "./component/discount/discountDisplay.component";
import { PaDiscountEditorComponent }    from "./component/discount/discountEditor.component";
import { DiscountService }              from "./service/discount.service";
import { ModelService }                 from "./service/model.service";
import { SimpleDataSourceService }      from "./service/datasource.service";

@NgModule({
    imports:    [ BrowserModule, FormsModule, ReactiveFormsModule ], 
    declarations:   [ ProductComponent, PaAttrDirective, PaModel, 
                      PaStructureDirective, PaIteratorDirective, PaDiscountAmountDirective, 
                      PaCellColor, PaCellColorSwitcher, 
                      ProductTableComponent, ProductFormComponent, 
                      PaToggleView,
                      PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountPipe, 
                      PaDiscountDisplayComponent, PaDiscountEditorComponent ], 
    providers:  [ DiscountService, ModelService, SimpleDataSourceService ],
    bootstrap:  [ ProductComponent ]
})
export class AppModule { }