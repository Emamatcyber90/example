"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var repository_model_1 = require("../model/repository.model");
var core_2 = require("@angular/core");
var ProductComponent = (function () {
    // getClasses(key: number): string {
    //     // return this.model.getProducts().length == 5 ? "bg-success" : "bg-warning";
    //     let product = this.model.getProduct(key);
    //     return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    // }
    // getClassMap(key: number): Object {
    //     let product = this.model.getProduct(key);
    //     return {
    //         "text-xs-center bg-danger": product.name == "Kayak", 
    //         "bg-info": product.price < 50
    //     };
    // }
    // fontSizeWithUnits: string = "30px";
    // fontSizeWithoutUnits: string = "30";
    // getStyles(key: number) {
    //     let product = this.model.getProduct(key);
    //     return {
    //         fontSize: "30px",
    //         "margin.px": 100, 
    //         color: product.price > 50 ? "red" : "green"
    //     };
    // }
    function ProductComponent(ref) {
        this.model = new repository_model_1.ModelRepository();
        this.targetName = "Kayak";
        this.counter = 1;
        window.appRef = ref;
        window.model = this.model;
    }
    ProductComponent.prototype.getProductByPosition = function (position) {
        return this.model.getProducts()[position];
    };
    // getClassesByPosition(position: number): string {
    //     let product = this.getProductByPosition(position);
    //     return "p-a-1 " + (product.price < 50 ? "bg-info" : "bg-warning");
    // }
    ProductComponent.prototype.getProduct = function (key) {
        return this.model.getProduct(key);
    };
    ProductComponent.prototype.getProducts = function () {
        return this.model.getProducts();
    };
    ProductComponent.prototype.getProductCount = function () {
        return this.getProducts().length;
    };
    ProductComponent.prototype.getKey = function (index, product) {
        return product.id;
    };
    ProductComponent.prototype.getProductPrice = function (index) {
        return Math.floor(this.getProduct(index).price);
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: "app",
        templateUrl: "./product.template.html"
    }),
    __metadata("design:paramtypes", [core_2.ApplicationRef])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map