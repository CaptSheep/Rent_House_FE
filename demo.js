"use strict";
exports.__esModule = true;
var demo1_1 = require("./demo1");
var Pluger = /** @class */ (function () {
    function Pluger() {
        this.status = false;
    }
    return Pluger;
}());
var plug = new Pluger();
var lamp = new demo1_1.Lamp();
console.log(lamp.status);
