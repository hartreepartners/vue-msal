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
exports.UserAgentApplicationExtended = void 0;
var msal_1 = require("msal");
var UserAgentApplicationExtended = /** @class */ (function (_super) {
    __extends(UserAgentApplicationExtended, _super);
    function UserAgentApplicationExtended(configuration) {
        var _this = _super.call(this, configuration) || this;
        _this.store = {};
        _this.store = _this.cacheStorage;
        return _this;
    }
    UserAgentApplicationExtended.prototype.clearCache = function () {
        _super.prototype.clearCache.call(this);
    };
    return UserAgentApplicationExtended;
}(msal_1.UserAgentApplication));
exports.UserAgentApplicationExtended = UserAgentApplicationExtended;
//# sourceMappingURL=UserAgentApplicationExtended.js.map