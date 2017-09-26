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
var product_model_1 = require("../model/product.model");
var PaAttrDirective = (function () {
    function PaAttrDirective() {
        // constructor(element: ElementRef, @Attribute("pa-attr")bgClass: string) {
        //     element.nativeElement.classList.add(bgClass || "bg-success");
        // }
        // constructor(private element: ElementRef) { 
        //     this.element.nativeElement.addEventListener("click", e => {
        //         if (null != this.product) {
        //             this.click.emit(this.product.category);
        //         }
        //     });
        // }
        this.click = new core_1.EventEmitter();
        // ngOnInit() {
        //     this.element.nativeElement.classList.add(this.bgClass || "bg-success");
        // }
        // ngOnChanges(changes: {[property: string]: SimpleChange}) {
        //     let change = changes["bgClass"];
        //     let classList = this.element.nativeElement.classList;
        //     if (!change.isFirstChange() && classList.contains(change.previousValue)) {
        //         classList.remove(change.previousValue);
        //     }
        //     if (!classList.contains(change.currentValue)) {
        //         classList.add(change.currentValue);
        //     }
        // }
    }
    PaAttrDirective.prototype.triggerCustomerEvent = function () {
        if (null != this.product) {
            this.click.emit(this.product.category);
        }
    };
    return PaAttrDirective;
}());
__decorate([
    core_1.Input("pa-attr"),
    core_1.HostBinding("class"),
    __metadata("design:type", String)
], PaAttrDirective.prototype, "bgClass", void 0);
__decorate([
    core_1.Input("pa-product"),
    __metadata("design:type", product_model_1.Product)
], PaAttrDirective.prototype, "product", void 0);
__decorate([
    core_1.Output("pa-category"),
    __metadata("design:type", Object)
], PaAttrDirective.prototype, "click", void 0);
__decorate([
    core_1.HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PaAttrDirective.prototype, "triggerCustomerEvent", null);
PaAttrDirective = __decorate([
    core_1.Directive({
        selector: "[pa-attr]"
    })
], PaAttrDirective);
exports.PaAttrDirective = PaAttrDirective;
//# sourceMappingURL=attr.directive.js.map