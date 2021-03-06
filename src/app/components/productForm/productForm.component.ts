import { Component, Output, EventEmitter, ViewEncapsulation }    from "@angular/core";
import { Product }  from "../../model/product.model";
import { ProductFormGroup } from "../../model/form.group";
import { Model }    from "../../model/repository.model";
import { VALUE_SERVICE }    from "../../common/valueDisplay.directive";

@Component({
    selector:   "paProductForm", 
    templateUrl:    "./productForm.template.html", 
    viewProviders:  [ {provide: VALUE_SERVICE, useValue: "Oranges"} ]
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    isFormSubmitted: boolean = false;

    // @Output("paNewProduct")
    // newProductEvent = new EventEmitter<Product>();

    constructor(private model: Model) { }

    submitForm(form: any) {
        this.isFormSubmitted = true;
        if (form.valid) {
            // this.newProductEvent.emit(this.newProduct);
            this.model.saveProduct(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.isFormSubmitted = false;
        }
    }
}