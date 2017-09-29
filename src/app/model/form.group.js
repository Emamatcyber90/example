"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var form_model_1 = require("./form.model");
var limit_formvalidator_1 = require("./limit.formvalidator");
var ProductFormGroup = (function (_super) {
    __extends(ProductFormGroup, _super);
    function ProductFormGroup() {
        return _super.call(this, {
            name: new form_model_1.ProductFormControl("Name", "name", "", forms_1.Validators.required),
            category: new form_model_1.ProductFormControl("Category", "category", "", forms_1.Validators.compose([
                forms_1.Validators.required,
                forms_1.Validators.pattern("^[A-Za-z ]+$"),
                forms_1.Validators.minLength(3),
                forms_1.Validators.maxLength(10)
            ])),
            price: new form_model_1.ProductFormControl("Price", "price", "", forms_1.Validators.compose([
                forms_1.Validators.required,
                limit_formvalidator_1.LimitValidator.Limit(100),
                forms_1.Validators.pattern("^[0-9\.]+$")
            ]))
        }) || this;
    }
    Object.defineProperty(ProductFormGroup.prototype, "productControls", {
        get: function () {
            var _this = this;
            return Object.keys(this.controls).map(function (k) { return _this.controls[k]; });
        },
        enumerable: true,
        configurable: true
    });
    ProductFormGroup.prototype.getFormValidationMessages = function (form) {
        var messages = [];
        this.productControls.forEach(function (c) { return c.getValidationMessages().forEach(function (m) { return messages.push(m); }); });
        return messages;
    };
    return ProductFormGroup;
}(forms_1.FormGroup));
exports.ProductFormGroup = ProductFormGroup;
//# sourceMappingURL=form.group.js.map