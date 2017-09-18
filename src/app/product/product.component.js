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
var ProductComponent = (function () {
    function ProductComponent() {
        this.model = new repository_model_1.ModelRepository();
        this.newProduct = new product_model_1.Product();
        this.isSubmitted = false;
    }
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    Object.defineProperty(ProductComponent.prototype, "jsonProduct", {
        get: function () {
            return JSON.stringify(this.newProduct);
        },
        enumerable: true,
        configurable: true
    });
    ProductComponent.prototype.addProduct = function (p) {
        console.log("New Product: " + this.jsonProduct);
    };
    ProductComponent.prototype.getValidationMessages = function (state, fieldName) {
        var field = state.path || fieldName;
        var messages = [];
        // console.log(JSON.stringify(state.errors));
        if (state.errors) {
            for (var errorName in state.errors) {
                // console.log(JSON.stringify(state.errors[errorName]));
                switch (errorName) {
                    case "required":
                        messages.push("You must enter a " + fieldName);
                        break;
                    case "minlength":
                        messages.push("A " + fieldName + " must be at least \n                            " + state.errors['minlength'].requiredLength + " characters");
                        break;
                    case "pattern":
                        messages.push("The " + fieldName + " contains illegal characters");
                        break;
                }
            }
        }
        return messages;
    };
    ProductComponent.prototype.getFormValidationMessages = function (form) {
        var _this = this;
        var messages = [];
        Object.keys(form.controls).forEach(function (k) {
            _this.getValidationMessages(form.controls[k], k)
                .forEach(function (m) { return messages.push(m); });
        });
        return messages;
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