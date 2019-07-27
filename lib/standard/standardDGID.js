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
var _ = require("lodash");
var DGID_TYPE;
(function (DGID_TYPE) {
    DGID_TYPE[DGID_TYPE["Invalid"] = -1] = "Invalid";
    DGID_TYPE[DGID_TYPE["System"] = 1] = "System";
    DGID_TYPE[DGID_TYPE["User"] = 2] = "User";
    DGID_TYPE[DGID_TYPE["Reserved"] = 3] = "Reserved";
})(DGID_TYPE = exports.DGID_TYPE || (exports.DGID_TYPE = {}));
var StandardDGID = (function (_super) {
    __extends(StandardDGID, _super);
    function StandardDGID() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.supervisor = 10000000;
        return _this;
    }
    StandardDGID.prototype.validate = function (dgid) {
        if (!_.isInteger(dgid)) {
            return DGID_TYPE.Invalid;
        }
        if (dgid < 10000000 || dgid > 99999999) {
            return DGID_TYPE.Invalid;
        }
        switch (Math.floor(dgid / 10000000)) {
            case 1:
                return DGID_TYPE.System;
            case 2:
                return DGID_TYPE.User;
            default:
                return DGID_TYPE.Reserved;
        }
    };
    return StandardDGID;
}(standard_1.Standard));
exports.StandardDGID = StandardDGID;
exports.standard_dgid = new StandardDGID();
//# sourceMappingURL=standardDGID.js.map