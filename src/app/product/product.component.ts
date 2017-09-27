import { Component } from "@angular/core";
import { ModelRepository } from "../model/repository.model";
import { ApplicationRef }   from "@angular/core";
import { Product }  from "../model/product.model";
import { NgForm }   from "@angular/forms";
import { ProductFormGroup } from "../model/form.group";

@Component({
    selector: "app",
    templateUrl: "./product.template.html"
})
export class ProductComponent {
    model: ModelRepository = new ModelRepository();
    // form: ProductFormGroup = new ProductFormGroup();

    // getProduct(key: number): Product {
    //     return this.model.getProduct(key);
    // }

    // getProducts(): Product[] {
    //     return this.model.getProducts();
    // }

    // newProduct: Product = new Product();

    // get jsonProduct() {
    //     return JSON.stringify(this.newProduct);
    // }

    addProduct(p: Product) {
        // console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    }

    // getValidationMessages(state: any, fieldName?: string) {
    //     let field: string = state.path || fieldName;
    //     let messages: string[] = [];
    //     // console.log(JSON.stringify(state.errors));
    //     if (state.errors) {
    //         for (let errorName in state.errors) {
    //             // console.log(JSON.stringify(state.errors[errorName]));
    //             switch (errorName) {
    //                 case "required":
    //                     messages.push(`You must enter a ${ fieldName}`);
    //                     break;
    //                 case "minlength":
    //                     messages.push(`A ${ fieldName} must be at least 
    //                         ${ state.errors['minlength'].requiredLength } characters`);
    //                     break;
    //                 case "pattern":
    //                     messages.push(`The ${ fieldName } contains illegal characters`);
    //                     break;
    //             }
    //         }
    //     }
    //     return messages;
    // }

    // getFormValidationMessages(form: NgForm): string[] {
    //     let messages: string[] = [];
    //     Object.keys(form.controls).forEach(k => {
    //         this.getValidationMessages(form.controls[k], k)
    //             .forEach(m => messages.push(m));
    //     });
    //     return messages;
    // }

    // deleteProduct(key: number) {
    //     this.model.deleteProduct(key);
    // }

    // isSubmitted: boolean = false;

    // showTable: boolean = true; 

    // submitForm(form: NgForm) {
    //     this.isSubmitted = true;
    //     if (form.valid) {
    //         this.addProduct(this.newProduct);
    //         this.newProduct = new Product();
    //         form.reset();
    //         this.isSubmitted = false;
    //     }
    // }
}