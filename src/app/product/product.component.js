"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_model_1 = require("../model/repository.model");
var product_model_1 = require("../model/product.model");
var form_group_1 = require("../model/form.group");
var ProductComponent = (function () {
    function ProductComponent() {
        this.model = new repository_model_1.ModelRepository();
        this.form = new form_group_1.ProductFormGroup();
        this.newProduct = new product_model_1.Product();
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
        this.isSubmitted = false;
    }
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    // get jsonProduct() {
    //     return JSON.stringify(this.newProduct);
    // }
    ProductComponent.prototype.addProduct = function (p) {
        // console.log("New Product: " + this.jsonProduct);
        this.model.saveProduct(p);
    };
    ProductComponent.prototype.submitForm = function (form) {
        this.isSubmitted = true;
        if (form.valid) {
            this.addProduct(this.newProduct);
            this.newProduct = new product_model_1.Product();
            form.reset();
            this.isSubmitted = false;
        }
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "./product.template.html"
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map