import { Component } from "@angular/core";
import { ModelRepository } from "./model/repository.model";

@Component({
    selector: "app",
    templateUrl: "template.html"
})
export class ProductComponent {
    model: ModelRepository = new ModelRepository();
}