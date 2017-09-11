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

    getClasses(key: number): string {
        // return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
        let product = this.model.getProduct(key);
        return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    }

    getClassMap(key: number): Object {
        let product = this.model.getProduct(key);
        return {
            "text-xs-center bg-danger": product.name == "Kayak", 
            "bg-info": product.price < 50
        };
    }

    fontSizeWithUnits: string = "30px";
    fontSizeWithoutUnits: string = "30";

    getStyles(key: number) {
        let product = this.model.getProduct(key);
        return {
            fontSize: "30px",
            "margin.px": 100, 
            color: product.price > 50 ? "red" : "green"
        };
    }

    constructor(ref: ApplicationRef) {
        
    }
}