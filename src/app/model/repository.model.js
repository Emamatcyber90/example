"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var datasource_model_1 = require("./datasource.model");
var ModelRepository = (function () {
    function ModelRepository() {
        var _this = this;
        this.locator = function (p, id) { return p.id == id; };
        this.dataSource = new datasource_model_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getData().forEach(function (p) { return _this.products.push(p); });
    }
    ModelRepository.prototype.getProducts = function () {
        return this.products;
    };
    ModelRepository.prototype.getProduct = function (id) {
        var _this = this;
        return this.products.find(function (p) { return _this.locator(p, id); });
    };
    ModelRepository.prototype.saveProduct = function (product) {
        var _this = this;
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = this.products.findIndex(function (p) { return _this.locator(p, product.id); });
            this.products.splice(index, 1, product);
        }
    };
    ModelRepository.prototype.deleteProduct = function (id) {
        var _this = this;
        var index = this.products.findIndex(function (p) { return _this.locator(p, id); });
        if (index > -1) {
            this.products.splice(index, 1);
        }
    };
    ModelRepository.prototype.generateId = function () {
        var candidate = 100;
        while (this.getProduct(candidate) != null) {
            candidate++;
        }
        return candidate;
    };
    return ModelRepository;
}());
exports.ModelRepository = ModelRepository;
//# sourceMappingURL=repository.model.js.map