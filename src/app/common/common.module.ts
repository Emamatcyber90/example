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
import { LogService, LOG_SERVICE, SpecialLogService, LogLevel, LOG_LEVEL }  from "./log.service";
import { VALUE_SERVICE, PaDisplayValueDirective }   from "./valueDisplay.directive";

@NgModule({
    imports:    [ ModelModule ], 
    declarations: [ PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountPipe, 
                    PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective, PaModel, 
                    PaAttrDirective, PaCellColor, PaCellColorSwitcher, PaDisplayValueDirective ],
    exports: [  PaAddTaxPipe, PaCategoryFilterPipe, PaDiscountPipe, 
                PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective, PaModel, 
                PaAttrDirective, PaCellColor, PaCellColorSwitcher, PaDisplayValueDirective ],
    providers: [ DiscountService, LogService, 
                 { provide: VALUE_SERVICE, useValue: "Apples" } ]
})
export class CommonModule {

}