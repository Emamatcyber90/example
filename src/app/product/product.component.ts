import { Component } from "@angular/core";
import { ModelRepository } from "../model/repository.model";

@Component({
    selector: "app",
    templateUrl: "./product.template.html"
})
export class ProductComponent {
    model: ModelRepository = new ModelRepository();

    getClasses(): string {
        return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    }
}