import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { ModelService }     from "../../service/model.service";
import { Product }  from "../../model/product.model";
import { PaCellColor }  from "../../directive/cellColor.directive";
import { DiscountService }  from "../../service/discount.service";

@Component({
    selector:   "paProductTable", 
    templateUrl:    "./productTable.template.html"
})
export class ProductTableComponent {

    // discounter: DiscountService = new DiscountService();

    @Input("model") dataModel: ModelService;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    dateObject: Date = new Date(2020, 1, 20);
    dateString: String = "2020-02-20T00:00:00.000";
    dateNumber: number = 1582156800000;

}