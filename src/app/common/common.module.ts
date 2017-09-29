import { NgModule }     from "@angular/core";
import { PaAttrDirective }          from "./attr.directive";
import { PaCellColor }              from "./cellColor.directive";
import { PaCellColorSwitcher }      from "./cellColorSwitcher.directive";
import { PaDiscountAmountDirective} from "./discountAmount.directive";
import { PaStructureDirective }     from "./structure.directive";
import { PaIteratorDirective }      from "./iterator.directive";
import { PaModel }                  from "./twoway.directive";
import { PaCategoryFilterPipe }     from "./categoryFilter.pipe";
import { PaDiscountPipe }           from "./discount.pipe";
import { PaAddTaxPipe }             from "./addTax.pipe";
import { DiscountService }          from "./discount.service";
import { ModelModule }              from "../model/model.module";

@NgModule({
    imports:    [ ModelModule ], 
    declarations: [ PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountPipe, 
                    PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective, PaModel, 
                    PaAttrDirective, PaCellColor, PaCellColorSwitcher ],
    exports: [  PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountPipe, 
                PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective, PaModel, 
                PaAttrDirective, PaCellColor, PaCellColorSwitcher ],
    providers: [ DiscountService ]
})
export class CommonModule {

}