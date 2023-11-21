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
var MotherAccount = /** @class */ (function () {
    function MotherAccount(_oneDeposit, _oneWithDraw) {
        this.oneDeposit = _oneDeposit;
        this.oneWithDraw = _oneWithDraw;
    }
    MotherAccount.prototype.totaldeposit = function () {
        return "Il totale depositato \u00E8: ".concat(this.oneDeposit);
    };
    MotherAccount.prototype.totalwithdraw = function () {
        return "Il totale prelevato \u00E8: ".concat(this.oneWithDraw);
    };
    MotherAccount.prototype.totalinterest = function () {
        return "Avendo un interesse del 10%, l'interesse versato alla banca  \u00E8: ".concat((this.oneDeposit - this.oneWithDraw) * 10 / 100);
    };
    MotherAccount.prototype.totalrest = function () {
        var interest = (this.oneDeposit - this.oneWithDraw) * 10 / 100;
        return "Il saldo \u00E8: ".concat(this.oneDeposit - interest - this.oneWithDraw);
    };
    return MotherAccount;
}());
var newmotheraccount = new MotherAccount(1000, 500);
console.log(newmotheraccount.totalinterest());
console.log(newmotheraccount.totalwithdraw());
console.log(newmotheraccount.totaldeposit());
console.log(newmotheraccount.totalrest());
var SonAccount = /** @class */ (function (_super) {
    __extends(SonAccount, _super);
    function SonAccount(_oneDeposit, _oneWithDraw) {
        return _super.call(this, _oneDeposit, _oneWithDraw) || this;
    }
    SonAccount.prototype.totaldeposit = function () {
        return "Il totale depositato \u00E8: ".concat(this.oneDeposit);
    };
    SonAccount.prototype.totalwithdraw = function () {
        return "Il totale prelevato \u00E8: ".concat(this.oneWithDraw);
    };
    SonAccount.prototype.totalrest = function () {
        return "Il saldo \u00E8: ".concat(this.oneDeposit - this.oneWithDraw);
    };
    return SonAccount;
}(MotherAccount));
var newsonaccount = new SonAccount(1000, 223);
console.log(newsonaccount.totalwithdraw());
console.log(newsonaccount.totaldeposit());
console.log(newsonaccount.totalrest());
