import { Component, Output, EventEmitter }    from "@angular/core";
import { Product }  from "../../model/product.model";
import { ProductFormGroup } from "../../model/form.group";

@Component({
    selector:   "paProductForm", 
    templateUrl:    "./productForm.template.html"
})
export class ProductFormComponent {
    form: ProductFormGroup = new ProductFormGroup();
    newProduct: Product = new Product();
    isFormSubmitted: boolean = false;

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    submitForm(form: any) {
        this.isFormSubmitted = true;
        if (form.valid) {
            this.newProductEvent.emit(this.newProduct);
            this.newProduct = new Product();
            this.form.reset();
            this.isFormSubmitted = false;
        }
    }
}