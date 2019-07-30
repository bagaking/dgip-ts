"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var standard_1 = require("./standard");
var StandardNftID = (function (_super) {
    __extends(StandardNftID, _super);
    function StandardNftID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardNftID.prototype.test = function (nft_id) {
        return nft_id.length === 18 && nft_id[0] === "1";
    };
    return StandardNftID;
}(standard_1.Standard));
exports.StandardNftID = StandardNftID;
exports.standard_nft_id = new StandardNftID();
//# sourceMappingURL=standardNftID.js.map