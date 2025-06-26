"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interceptor = exports.Cruiser = exports.Starship = void 0;
//le parent
var Starship = /** @class */ (function () {
    function Starship(name, size) {
        this.size = size;
        this.name = name;
    }
    return Starship;
}());
exports.Starship = Starship;
//l'enfant qui transport du matériel 
var Cruiser = /** @class */ (function (_super) {
    __extends(Cruiser, _super);
    function Cruiser(name, size, maxCapacity) {
        var _this = _super.call(this, name, size) || this;
        _this.occupiedCapacity = 0;
        _this.maxCapacity = maxCapacity;
        return _this;
    }
    //ajoute une charge
    Cruiser.prototype.load = function (quantity) {
        if (this.occupiedCapacity + quantity <= this.maxCapacity) {
            this.occupiedCapacity += quantity;
            console.log("Free space: ".concat(this.maxCapacity - this.occupiedCapacity));
        }
        else {
            console.log("No room left for loading");
        }
    };
    //elneve une charge
    Cruiser.prototype.unload = function (quantity) {
        this.occupiedCapacity -= quantity;
        console.log("Free space: ".concat(this.maxCapacity - this.occupiedCapacity));
    };
    //l'espce restant
    Cruiser.prototype.getCurrentFreeSpace = function () {
        return this.maxCapacity - this.occupiedCapacity;
    };
    return Cruiser;
}(Starship));
exports.Cruiser = Cruiser;
//2nde classe enfant : vaisseau de combat
var Interceptor = /** @class */ (function (_super) {
    __extends(Interceptor, _super);
    function Interceptor(name, size, guns) {
        var _this = _super.call(this, name, size) || this;
        _this.maxShotPerGun = 1;
        _this.currentShotCount = 0;
        _this.guns = guns;
        return _this;
    }
    Interceptor.prototype.shoot = function () {
        if (this.currentShotCount < this.maxShotPerGun * this.guns) {
            this.currentShotCount += 1;
            console.log("Shot fired");
        }
        else {
            console.log("Reload before shoot");
        }
    };
    Interceptor.prototype.reload = function () {
        this.currentShotCount = 0;
        console.log("Guns are reloaded");
    };
    Interceptor.prototype.getCurrentShotCount = function () {
        return this.currentShotCount;
    };
    return Interceptor;
}(Starship));
exports.Interceptor = Interceptor;

const cargo = new Cruiser("CargoX", 100, 80)
cargo.load(30)
cargo.unload(10)

const xwing = new Interceptor("X-Wing", 15, 2)
xwing.shoot()
xwing.shoot()
xwing.shoot()  
xwing.reload()
xwing.shoot()