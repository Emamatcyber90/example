import { Component, Input }     from "@angular/core";
import { DiscountService }      from "../../service/discount.service";

@Component({
    selector:   "paDiscountDisplay",
    template:   `<div class="bg-info p-a-1">
                    The discount is {{ discounter.discount }} 
                 </div>`
})
export class PaDiscountDisplayComponent {

    constructor(private discounter: DiscountService) { }
}