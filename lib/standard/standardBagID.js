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
var standardNftID_1 = require("./standardNftID");
var standardDGID_1 = require("./standardDGID");
var _ = require("lodash");
var StandardBagID = (function (_super) {
    __extends(StandardBagID, _super);
    function StandardBagID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardBagID.prototype.test = function (nft_id) {
        return standardNftID_1.standard_nft_id.test(nft_id) && _.startsWith(nft_id, "1000090000");
    };
    StandardBagID.prototype.bagIdToDGID = function (nft_id) {
        if (!this.test(nft_id)) {
            throw new Error("convert nftId to dgid error, nft_id " + nft_id + " is not a bag.");
        }
        return parseInt(nft_id.substr(10));
    };
    StandardBagID.prototype.dgidToBagId = function (dgid) {
        if (standardDGID_1.DGID_TYPE.Invalid === standardDGID_1.standard_dgid.test(dgid)) {
            throw new Error("convert dgid to nftId error, " + dgid + ".");
        }
        return "1000090000" + dgid;
    };
    return StandardBagID;
}(standard_1.Standard));
exports.StandardBagID = StandardBagID;
exports.standard_bag_id = new StandardBagID();
//# sourceMappingURL=standardBagID.js.map