import { Component } from "@angular/core";
import { ModelRepository } from "../model/repository.model";
import { ApplicationRef }   from "@angular/core";
import { Product }  from "../model/product.model";

@Component({
    selector: "app",
    templateUrl: "./product.template.html"
})
export class ProductComponent {
    model: ModelRepository = new ModelRepository();

    getProduct(key: number): Product {
        return this.model.getProduct(key);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

}