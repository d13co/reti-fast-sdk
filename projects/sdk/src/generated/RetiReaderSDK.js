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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetiReaderSDK = exports.RetiReaderParamsFactory = exports.ValidatorCurStateFromTuple = exports.APP_SPEC = void 0;
var app_arc56_1 = require("@algorandfoundation/algokit-utils/types/app-arc56");
var app_client_1 = require("@algorandfoundation/algokit-utils/types/app-client");
var app_factory_1 = require("@algorandfoundation/algokit-utils/types/app-factory");
exports.APP_SPEC = { "name": "RetiReader", "structs": { "ValidatorCurState": [{ "name": "numPools", "type": "uint16" }, { "name": "totalStakers", "type": "uint64" }, { "name": "totalAlgoStaked", "type": "uint64" }, { "name": "rewardTokenHeldBack", "type": "uint64" }] }, "methods": [{ "name": "getValidatorStates", "args": [{ "type": "uint64", "name": "registryAppId" }, { "type": "uint64[]", "name": "validatorIds" }], "returns": { "type": "(uint16,uint64,uint64,uint64)", "struct": "ValidatorCurState" }, "actions": { "create": ["NoOp"], "call": [] }, "readonly": true, "events": [], "recommendations": {} }], "arcs": [22, 28], "networks": {}, "state": { "schema": { "global": { "ints": 0, "bytes": 0 }, "local": { "ints": 0, "bytes": 0 } }, "keys": { "global": {}, "local": {}, "box": {} }, "maps": { "global": {}, "local": {}, "box": {} } }, "bareActions": { "create": [], "call": [] }, "sourceInfo": { "approval": { "sourceInfo": [{ "pc": [124], "errorMessage": "Bytes has valid prefix" }, { "pc": [27], "errorMessage": "OnCompletion must be NoOp && can only call when creating" }, { "pc": [80], "errorMessage": "index access is out of bounds" }, { "pc": [46], "errorMessage": "invalid array length header" }, { "pc": [130], "errorMessage": "invalid number of bytes for ValidatorCurState" }, { "pc": [58], "errorMessage": "invalid number of bytes for arc4.dynamic_array<uint64>" }, { "pc": [38], "errorMessage": "invalid number of bytes for arc4.uint64" }], "pcOffsetMethod": "none" }, "clear": { "sourceInfo": [], "pcOffsetMethod": "none" } }, "source": { "approval": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYXJjNC9pbmRleC5kLnRzOjpDb250cmFjdC5hcHByb3ZhbFByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBpbnRjYmxvY2sgOCAwIDEKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9yZXRpX3JlYWRlci9jb250cmFjdC5hbGdvLnRzOjUKICAgIC8vIGV4cG9ydCBjbGFzcyBSZXRpUmVhZGVyIGV4dGVuZHMgQ29udHJhY3QgewogICAgcHVzaGJ5dGVzIDB4MjRlMDBjODAgLy8gbWV0aG9kICJnZXRWYWxpZGF0b3JTdGF0ZXModWludDY0LHVpbnQ2NFtdKSh1aW50MTYsdWludDY0LHVpbnQ2NCx1aW50NjQpIgogICAgdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMAogICAgbWF0Y2ggbWFpbl9nZXRWYWxpZGF0b3JTdGF0ZXNfcm91dGVAMgogICAgZXJyCgptYWluX2dldFZhbGlkYXRvclN0YXRlc19yb3V0ZUAyOgogICAgLy8gc21hcnRfY29udHJhY3RzL3JldGlfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6NgogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlLCBvbkNyZWF0ZTogJ3JlcXVpcmUnIH0pCiAgICB0eG4gT25Db21wbGV0aW9uCiAgICAhCiAgICB0eG4gQXBwbGljYXRpb25JRAogICAgIQogICAgJiYKICAgIGFzc2VydCAvLyBPbkNvbXBsZXRpb24gbXVzdCBiZSBOb09wICYmIGNhbiBvbmx5IGNhbGwgd2hlbiBjcmVhdGluZwogICAgYiBnZXRWYWxpZGF0b3JTdGF0ZXMKCgovLyBzbWFydF9jb250cmFjdHMvcmV0aV9yZWFkZXIvY29udHJhY3QuYWxnby50czo6UmV0aVJlYWRlci5nZXRWYWxpZGF0b3JTdGF0ZXNbcm91dGluZ10oKSAtPiB2b2lkOgpnZXRWYWxpZGF0b3JTdGF0ZXM6CiAgICAvLyBzbWFydF9jb250cmFjdHMvcmV0aV9yZWFkZXIvY29udHJhY3QuYWxnby50czo2CiAgICAvLyBAYWJpbWV0aG9kKHsgcmVhZG9ubHk6IHRydWUsIG9uQ3JlYXRlOiAncmVxdWlyZScgfSkKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDEKICAgIGR1cAogICAgbGVuCiAgICBpbnRjXzAgLy8gOAogICAgPT0KICAgIGFzc2VydCAvLyBpbnZhbGlkIG51bWJlciBvZiBieXRlcyBmb3IgYXJjNC51aW50NjQKICAgIGJ0b2kKICAgIHR4bmEgQXBwbGljYXRpb25BcmdzIDIKICAgIGR1cG4gMgogICAgaW50Y18xIC8vIDAKICAgIGV4dHJhY3RfdWludDE2IC8vIG9uIGVycm9yOiBpbnZhbGlkIGFycmF5IGxlbmd0aCBoZWFkZXIKICAgIGR1cAogICAgY292ZXIgMgogICAgaW50Y18wIC8vIDgKICAgICoKICAgIHB1c2hpbnQgMiAvLyAyCiAgICArCiAgICBzd2FwCiAgICBsZW4KICAgID09CiAgICBhc3NlcnQgLy8gaW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgZm9yIGFyYzQuZHluYW1pY19hcnJheTx1aW50NjQ+CiAgICBpbnRjXzEgLy8gMAoKZ2V0VmFsaWRhdG9yU3RhdGVzX2Zvcl9oZWFkZXJAMjoKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9yZXRpX3JlYWRlci9jb250cmFjdC5hbGdvLnRzOjgKICAgIC8vIGZvciAoY29uc3QgdmFsaWRhdG9ySWQgb2YgdmFsaWRhdG9ySWRzKSB7CiAgICBkdXAKICAgIGRpZyAyCiAgICA8CiAgICBieiBnZXRWYWxpZGF0b3JTdGF0ZXNfYWZ0ZXJfZm9yQDYKICAgIGRpZyAyCiAgICBleHRyYWN0IDIgMAogICAgZGlnIDEKICAgIGR1cAogICAgY292ZXIgMgogICAgaW50Y18wIC8vIDgKICAgICoKICAgIGludGNfMCAvLyA4CiAgICBleHRyYWN0MyAvLyBvbiBlcnJvcjogaW5kZXggYWNjZXNzIGlzIG91dCBvZiBib3VuZHMKICAgIC8vIHNtYXJ0X2NvbnRyYWN0cy9yZXRpX3JlYWRlci9jb250cmFjdC5hbGdvLnRzOjktMTIKICAgIC8vIGNvbnN0IHsgcmV0dXJuVmFsdWUgfSA9IGNvbXBpbGVBcmM0KFJldGkpLmNhbGwuZ2V0VmFsaWRhdG9yU3RhdGUoewogICAgLy8gICBhcHBJZDogcmVnaXN0cnlBcHBJZCwKICAgIC8vICAgYXJnczogW3ZhbGlkYXRvcklkXSwKICAgIC8vIH0pOwogICAgaXR4bl9iZWdpbgogICAgcHVzaGJ5dGVzIDB4MWYyZjAxMDkgLy8gbWV0aG9kICJnZXRWYWxpZGF0b3JTdGF0ZSh1aW50NjQpKHVpbnQxNix1aW50NjQsdWludDY0LHVpbnQ2NCkiCiAgICBpdHhuX2ZpZWxkIEFwcGxpY2F0aW9uQXJncwogICAgaXR4bl9maWVsZCBBcHBsaWNhdGlvbkFyZ3MKICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIE9uQ29tcGxldGlvbgogICAgZGlnIDQKICAgIGl0eG5fZmllbGQgQXBwbGljYXRpb25JRAogICAgcHVzaGludCA2IC8vIGFwcGwKICAgIGl0eG5fZmllbGQgVHlwZUVudW0KICAgIGludGNfMSAvLyAwCiAgICBpdHhuX2ZpZWxkIEZlZQogICAgaXR4bl9zdWJtaXQKICAgIGl0eG4gTGFzdExvZwogICAgZHVwCiAgICBleHRyYWN0IDQgMAogICAgc3dhcAogICAgZXh0cmFjdCAwIDQKICAgIHB1c2hieXRlcyAweDE1MWY3Yzc1CiAgICA9PQogICAgYXNzZXJ0IC8vIEJ5dGVzIGhhcyB2YWxpZCBwcmVmaXgKICAgIGR1cAogICAgbGVuCiAgICBwdXNoaW50IDI2IC8vIDI2CiAgICA9PQogICAgYXNzZXJ0IC8vIGludmFsaWQgbnVtYmVyIG9mIGJ5dGVzIGZvciBWYWxpZGF0b3JDdXJTdGF0ZQogICAgLy8gc21hcnRfY29udHJhY3RzL3JldGlfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6MTMKICAgIC8vIGxvZyhlbmNvZGVBcmM0KHJldHVyblZhbHVlKSk7CiAgICBsb2cKICAgIGludGNfMiAvLyAxCiAgICArCiAgICBidXJ5IDEKICAgIGIgZ2V0VmFsaWRhdG9yU3RhdGVzX2Zvcl9oZWFkZXJAMgoKZ2V0VmFsaWRhdG9yU3RhdGVzX2FmdGVyX2ZvckA2OgogICAgLy8gc21hcnRfY29udHJhY3RzL3JldGlfcmVhZGVyL2NvbnRyYWN0LmFsZ28udHM6NgogICAgLy8gQGFiaW1ldGhvZCh7IHJlYWRvbmx5OiB0cnVlLCBvbkNyZWF0ZTogJ3JlcXVpcmUnIH0pCiAgICBwdXNoYnl0ZXMgMHgxNTFmN2M3NTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAKICAgIGxvZwogICAgaW50Y18yIC8vIDEKICAgIHJldHVybgo=", "clear": "I3ByYWdtYSB2ZXJzaW9uIDExCiNwcmFnbWEgdHlwZXRyYWNrIGZhbHNlCgovLyBAYWxnb3JhbmRmb3VuZGF0aW9uL2FsZ29yYW5kLXR5cGVzY3JpcHQvYmFzZS1jb250cmFjdC5kLnRzOjpCYXNlQ29udHJhY3QuY2xlYXJTdGF0ZVByb2dyYW0oKSAtPiB1aW50NjQ6Cm1haW46CiAgICBwdXNoaW50IDEgLy8gMQogICAgcmV0dXJuCg==" }, "byteCode": { "approval": "CyADCAABgAQk4AyANhoAjgEAAQAxGRQxGBQQREIAADYaAUkVIhJEFzYaAkcCI1lJTgIiC4ECCEwVEkQjSUsCDEEASEsCVwIASwFJTgIiCyJYsYAEHy8BCbIashojshlLBLIYgQayECOyAbO0PklXBABMVwAEgAQVH3x1EkRJFYEaEkSwJAhFAUL/sYAeFR98dQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsCRD", "clear": "C4EBQw==" }, "events": [], "templateVariables": {} };
var BinaryStateValue = /** @class */ (function () {
    function BinaryStateValue(value) {
        this.value = value;
    }
    BinaryStateValue.prototype.asByteArray = function () {
        return this.value;
    };
    BinaryStateValue.prototype.asString = function () {
        return this.value !== undefined ? Buffer.from(this.value).toString('utf-8') : undefined;
    };
    return BinaryStateValue;
}());
/**
 * Converts the ABI tuple representation of a ValidatorCurState to the struct representation
 */
function ValidatorCurStateFromTuple(abiTuple) {
    return (0, app_arc56_1.getABIStructFromABITuple)(abiTuple, exports.APP_SPEC.structs.ValidatorCurState, exports.APP_SPEC.structs);
}
exports.ValidatorCurStateFromTuple = ValidatorCurStateFromTuple;
/**
 * Exposes methods for constructing `AppClient` params objects for ABI calls to the RetiReader smart contract
 */
var RetiReaderParamsFactory = /** @class */ (function () {
    function RetiReaderParamsFactory() {
    }
    Object.defineProperty(RetiReaderParamsFactory, "create", {
        /**
         * Gets available create ABI call param factories
         */
        get: function () {
            return {
                _resolveByMethod: function (params) {
                    switch (params.method) {
                        case 'getValidatorStates':
                        case 'getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64)':
                            return RetiReaderParamsFactory.create.getValidatorStates(params);
                    }
                    throw new Error("Unknown ' + verb + ' method");
                },
                /**
                 * Constructs create ABI call params for the RetiReader smart contract using the getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64) ABI method
                 *
                 * @param params Parameters for the call
                 * @returns An `AppClientMethodCallParams` object for the call
                 */
                getValidatorStates: function (params) {
                    return __assign(__assign({}, params), { method: 'getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64)', args: Array.isArray(params.args) ? params.args : [params.args.registryAppId, params.args.validatorIds] });
                },
            };
        },
        enumerable: false,
        configurable: true
    });
    return RetiReaderParamsFactory;
}());
exports.RetiReaderParamsFactory = RetiReaderParamsFactory;
/**
 * A factory to create and deploy one or more instance of the RetiReader smart contract and to create one or more app clients to interact with those (or other) app instances
 */
var RetiReaderFactory = /** @class */ (function () {
    /**
     * Creates a new instance of `RetiReaderFactory`
     *
     * @param params The parameters to initialise the app factory with
     */
    function RetiReaderFactory(params) {
        var _this = this;
        /**
         * Get parameters to create transactions (create and deploy related calls) for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
         */
        this.params = {
            /**
             * Gets available create methods
             */
            create: {
                /**
                 * Creates a new instance of the RetiReader smart contract using the getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64) ABI method.
                 *
                 * @param params The params for the smart contract call
                 * @returns The create params
                 */
                getValidatorStates: function (params) {
                    return _this.appFactory.params.create(RetiReaderParamsFactory.create.getValidatorStates(params));
                },
            },
        };
        /**
         * Create transactions for the current app
         */
        this.createTransaction = {
            /**
             * Gets available create methods
             */
            create: {
                /**
                 * Creates a new instance of the RetiReader smart contract using the getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64) ABI method.
                 *
                 * @param params The params for the smart contract call
                 * @returns The create transaction
                 */
                getValidatorStates: function (params) {
                    return _this.appFactory.createTransaction.create(RetiReaderParamsFactory.create.getValidatorStates(params));
                },
            },
        };
        /**
         * Send calls to the current app
         */
        this.send = {
            /**
             * Gets available create methods
             */
            create: {
                /**
                 * Creates a new instance of the RetiReader smart contract using an ABI method call using the getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64) ABI method.
                 *
                 * @param params The params for the smart contract call
                 * @returns The create result
                 */
                getValidatorStates: function (params) { return __awaiter(_this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.appFactory.send.create(RetiReaderParamsFactory.create.getValidatorStates(params))];
                            case 1:
                                result = _a.sent();
                                return [2 /*return*/, { result: __assign(__assign({}, result.result), { return: result.result.return }), appClient: new RetiReaderClient(result.appClient) }];
                        }
                    });
                }); },
            },
        };
        this.appFactory = new app_factory_1.AppFactory(__assign(__assign({}, params), { appSpec: exports.APP_SPEC }));
    }
    Object.defineProperty(RetiReaderFactory.prototype, "appName", {
        /** The name of the app (from the ARC-32 / ARC-56 app spec or override). */
        get: function () {
            return this.appFactory.appName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RetiReaderFactory.prototype, "appSpec", {
        /** The ARC-56 app spec being used */
        get: function () {
            return exports.APP_SPEC;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RetiReaderFactory.prototype, "algorand", {
        /** A reference to the underlying `AlgorandClient` this app factory is using. */
        get: function () {
            return this.appFactory.algorand;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Returns a new `AppClient` client for an app instance of the given ID.
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    RetiReaderFactory.prototype.getAppClientById = function (params) {
        return new RetiReaderClient(this.appFactory.getAppClientById(params));
    };
    /**
     * Returns a new `AppClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     *
     * Automatically populates appName, defaultSender and source maps from the factory
     * if not specified in the params.
     * @param params The parameters to create the app client
     * @returns The `AppClient`
     */
    RetiReaderFactory.prototype.getAppClientByCreatorAndName = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = RetiReaderClient.bind;
                        return [4 /*yield*/, this.appFactory.getAppClientByCreatorAndName(params)];
                    case 1: return [2 /*return*/, new (_a.apply(RetiReaderClient, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Idempotently deploys the RetiReader smart contract.
     *
     * @param params The arguments for the contract calls and any additional parameters for the call
     * @returns The deployment result
     */
    RetiReaderFactory.prototype.deploy = function (params) {
        var _a;
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.appFactory.deploy(__assign(__assign({}, params), { createParams: ((_a = params.createParams) === null || _a === void 0 ? void 0 : _a.method) ? RetiReaderParamsFactory.create._resolveByMethod(params.createParams) : params.createParams ? params.createParams : undefined }))];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, { result: result.result, appClient: new RetiReaderClient(result.appClient) }];
                }
            });
        });
    };
    return RetiReaderFactory;
}());
/**
 * A client to make calls to the RetiReader smart contract
 */
var RetiReaderClient = /** @class */ (function () {
    function RetiReaderClient(appClientOrParams) {
        var _this = this;
        /**
         * Get parameters to create transactions for the current app. A good mental model for this is that these parameters represent a deferred transaction creation.
         */
        this.params = {
            /**
             * Makes a clear_state call to an existing instance of the RetiReader smart contract.
             *
             * @param params The params for the bare (raw) call
             * @returns The clearState result
             */
            clearState: function (params) {
                return _this.appClient.params.bare.clearState(params);
            },
        };
        /**
         * Create transactions for the current app
         */
        this.createTransaction = {
            /**
             * Makes a clear_state call to an existing instance of the RetiReader smart contract.
             *
             * @param params The params for the bare (raw) call
             * @returns The clearState result
             */
            clearState: function (params) {
                return _this.appClient.createTransaction.bare.clearState(params);
            },
        };
        /**
         * Send calls to the current app
         */
        this.send = {
            /**
             * Makes a clear_state call to an existing instance of the RetiReader smart contract.
             *
             * @param params The params for the bare (raw) call
             * @returns The clearState result
             */
            clearState: function (params) {
                return _this.appClient.send.bare.clearState(params);
            },
        };
        /**
         * Methods to access state for the current RetiReader app
         */
        this.state = {};
        this.appClient = appClientOrParams instanceof app_client_1.AppClient ? appClientOrParams : new app_client_1.AppClient(__assign(__assign({}, appClientOrParams), { appSpec: exports.APP_SPEC }));
    }
    /**
     * Checks for decode errors on the given return value and maps the return value to the return type for the given method
     * @returns The typed return value or undefined if there was no value
     */
    RetiReaderClient.prototype.decodeReturnValue = function (method, returnValue) {
        return returnValue !== undefined ? (0, app_arc56_1.getArc56ReturnValue)(returnValue, this.appClient.getABIMethod(method), exports.APP_SPEC.structs) : undefined;
    };
    /**
     * Returns a new `RetiReaderClient` client, resolving the app by creator address and name
     * using AlgoKit app deployment semantics (i.e. looking for the app creation transaction note).
     * @param params The parameters to create the app client
     */
    RetiReaderClient.fromCreatorAndName = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = RetiReaderClient.bind;
                        return [4 /*yield*/, app_client_1.AppClient.fromCreatorAndName(__assign(__assign({}, params), { appSpec: exports.APP_SPEC }))];
                    case 1: return [2 /*return*/, new (_a.apply(RetiReaderClient, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    /**
     * Returns an `RetiReaderClient` instance for the current network based on
     * pre-determined network-specific app IDs specified in the ARC-56 app spec.
     *
     * If no IDs are in the app spec or the network isn't recognised, an error is thrown.
     * @param params The parameters to create the app client
     */
    RetiReaderClient.fromNetwork = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = RetiReaderClient.bind;
                        return [4 /*yield*/, app_client_1.AppClient.fromNetwork(__assign(__assign({}, params), { appSpec: exports.APP_SPEC }))];
                    case 1: return [2 /*return*/, new (_a.apply(RetiReaderClient, [void 0, _b.sent()]))()];
                }
            });
        });
    };
    Object.defineProperty(RetiReaderClient.prototype, "appId", {
        /** The ID of the app instance this client is linked to. */
        get: function () {
            return this.appClient.appId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RetiReaderClient.prototype, "appAddress", {
        /** The app address of the app instance this client is linked to. */
        get: function () {
            return this.appClient.appAddress;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RetiReaderClient.prototype, "appName", {
        /** The name of the app. */
        get: function () {
            return this.appClient.appName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RetiReaderClient.prototype, "appSpec", {
        /** The ARC-56 app spec being used */
        get: function () {
            return this.appClient.appSpec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RetiReaderClient.prototype, "algorand", {
        /** A reference to the underlying `AlgorandClient` this app client is using. */
        get: function () {
            return this.appClient.algorand;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this app client with different params
     *
     * @param params The params to use for the the cloned app client. Omit a param to keep the original value. Set a param to override the original value. Setting to undefined will clear the original value.
     * @returns A new app client with the altered params
     */
    RetiReaderClient.prototype.clone = function (params) {
        return new RetiReaderClient(this.appClient.clone(params));
    };
    RetiReaderClient.prototype.newGroup = function () {
        var client = this;
        var composer = this.algorand.newGroup();
        var promiseChain = Promise.resolve();
        var resultMappers = [];
        return {
            /**
             * Add a clear state call to the RetiReader contract
             */
            clearState: function (params) {
                promiseChain = promiseChain.then(function () { return composer.addAppCall(client.params.clearState(params)); });
                return this;
            },
            addTransaction: function (txn, signer) {
                promiseChain = promiseChain.then(function () { return composer.addTransaction(txn, signer); });
                return this;
            },
            composer: function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, promiseChain];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, composer];
                        }
                    });
                });
            },
            simulate: function (options) {
                var _a;
                return __awaiter(this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, promiseChain];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, (!options ? composer.simulate() : composer.simulate(options))];
                            case 2:
                                result = _b.sent();
                                return [2 /*return*/, __assign(__assign({}, result), { returns: (_a = result.returns) === null || _a === void 0 ? void 0 : _a.map(function (val, i) { return resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue; }) })];
                        }
                    });
                });
            },
            send: function (params) {
                var _a;
                return __awaiter(this, void 0, void 0, function () {
                    var result;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, promiseChain];
                            case 1:
                                _b.sent();
                                return [4 /*yield*/, composer.send(params)];
                            case 2:
                                result = _b.sent();
                                return [2 /*return*/, __assign(__assign({}, result), { returns: (_a = result.returns) === null || _a === void 0 ? void 0 : _a.map(function (val, i) { return resultMappers[i] !== undefined ? resultMappers[i](val) : val.returnValue; }) })];
                        }
                    });
                });
            }
        };
    };
    return RetiReaderClient;
}());
/* BEGIN GHOST SDK CODE */
var app_arc56_2 = require("@algorandfoundation/algokit-utils/types/app-arc56");
var algosdk_1 = require("algosdk");
var emptySigner = (0, algosdk_1.makeEmptyTransactionSigner)();
var GhostBase = /** @class */ (function () {
    function GhostBase(_a) {
        var algorand = _a.algorand, readerAccount = _a.readerAccount;
        this.readerAccount = 'A7NMWS3NT3IUDMLVO26ULGXGIIOUQ3ND2TXSER6EBGRZNOBOUIQXHIBGDE'; // non-mainnet fee sink
        this.algorand = algorand;
        if (readerAccount)
            this.readerAccount = readerAccount;
        this.factory = this.algorand.client.getTypedAppFactory(RetiReaderFactory, {
            defaultSender: this.readerAccount,
        });
        this.client = this.factory.getAppClientById({ appId: 0n });
    }
    GhostBase.prototype.execute = function (_a) {
        var _b, _c;
        var transactions = _a.transactions, signature = _a.signature, extraSimulateArgs = _a.extraSimulateArgs;
        return __awaiter(this, void 0, void 0, function () {
            var methodName, builder, _i, transactions_1, txn, confirmations, logs, specRetObj, retTypeStr, retData, i;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        methodName = signature.slice(0, signature.indexOf('('));
                        builder = this.client.newGroup();
                        for (_i = 0, transactions_1 = transactions; _i < transactions_1.length; _i++) {
                            txn = transactions_1[_i];
                            builder = builder.addTransaction(txn, emptySigner);
                        }
                        return [4 /*yield*/, builder.simulate(__assign({ extraOpcodeBudget: 170000, allowMoreLogging: true, allowEmptySignatures: true, allowUnnamedResources: true }, extraSimulateArgs))
                            // collect logs from multiple, future support for arg splitting when > 2KB
                        ];
                    case 1:
                        confirmations = (_d.sent()).confirmations;
                        logs = confirmations.flatMap(function (_a, i) {
                            var logs = _a.logs;
                            if (!logs)
                                throw new Error("logs were not returned from simulate txn ".concat(i, ". this should never happen"));
                            return logs.slice(0, -1);
                        });
                        specRetObj = (_b = this.client.appSpec.methods.find(function (_a) {
                            var name = _a.name;
                            return name === methodName;
                        })) === null || _b === void 0 ? void 0 : _b.returns;
                        if (!specRetObj)
                            throw new Error('Method not found in app spec');
                        retTypeStr = (_c = specRetObj.struct) !== null && _c !== void 0 ? _c : specRetObj.type;
                        retData = [];
                        for (i = 0; i < logs.length; i++) {
                            retData.push((0, app_arc56_2.getABIDecodedValue)(new Uint8Array(logs[i]), retTypeStr, this.factory.appSpec.structs));
                        }
                        return [2 /*return*/, retData];
                }
            });
        });
    };
    GhostBase.factory = RetiReaderFactory;
    GhostBase.client = RetiReaderClient;
    return GhostBase;
}());
var RetiReaderSDK = /** @class */ (function (_super) {
    __extends(RetiReaderSDK, _super);
    function RetiReaderSDK(args) {
        return _super.call(this, args) || this;
    }
    RetiReaderSDK.prototype.getValidatorStates = function (args, extraMethodCallArgs, extraSimulateArgs) {
        return __awaiter(this, void 0, void 0, function () {
            var transactions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.factory.createTransaction.create.getValidatorStates(__assign({ args: args }, extraMethodCallArgs))];
                    case 1:
                        transactions = (_a.sent()).transactions;
                        return [2 /*return*/, this.execute({
                                transactions: transactions,
                                signature: 'getValidatorStates(uint64,uint64[])(uint16,uint64,uint64,uint64)',
                                extraSimulateArgs: extraSimulateArgs,
                            })];
                }
            });
        });
    };
    return RetiReaderSDK;
}(GhostBase));
exports.RetiReaderSDK = RetiReaderSDK;
/* END GHOST SDK CODE */
