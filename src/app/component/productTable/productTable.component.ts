import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { ModelRepository }  from "../../model/repository.model";
import { Product }  from "../../model/product.model";
import { PaCellColor }  from "../../directive/cellColor.directive";

@Component({
    selector:   "paProductTable", 
    templateUrl:    "./productTable.template.html"
})
export class ProductTableComponent {
    @Input("model") dataModel: ModelRepository;

    getProduct(key: number): Product {
        return this.dataModel.getProduct(key);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(key: number) {
        this.dataModel.deleteProduct(key);
    }

    // isShowTable: boolean = true;

}