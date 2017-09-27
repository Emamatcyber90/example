import { Component, Input } from "@angular/core";
import { ModelRepository }  from "../../model/repository.model";
import { Product }  from "../../model/product.model";

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

    isShowTable: boolean = true;
}