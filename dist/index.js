"use strict";
/// <reference path="./vendors.d.ts"/>
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(require("./slp"));
__export(require("./utils"));
__export(require("./primatives"));
__export(require("./bitdbnetwork"));
__export(require("./localvalidator"));
__export(require("./bitboxnetwork"));
__export(require("./transactionhelpers"));
var bitcore = require("bitcore-lib-cash");
exports.bitcore = bitcore;
var SlpTransactionType;
(function (SlpTransactionType) {
    SlpTransactionType["GENESIS"] = "GENESIS";
    SlpTransactionType["MINT"] = "MINT";
    SlpTransactionType["SEND"] = "SEND";
})(SlpTransactionType = exports.SlpTransactionType || (exports.SlpTransactionType = {}));
var SlpVersionType;
(function (SlpVersionType) {
    SlpVersionType[SlpVersionType["TokenVersionType1"] = 1] = "TokenVersionType1";
    SlpVersionType[SlpVersionType["TokenVersionType1_NFT_Child"] = 65] = "TokenVersionType1_NFT_Child";
    SlpVersionType[SlpVersionType["TokenVersionType1_NFT_Parent"] = 129] = "TokenVersionType1_NFT_Parent";
})(SlpVersionType = exports.SlpVersionType || (exports.SlpVersionType = {}));
// negative values are bad, 0 = NOT_SLP, positive values are a SLP (token or baton)
var SlpUtxoJudgement;
(function (SlpUtxoJudgement) {
    SlpUtxoJudgement["UNKNOWN"] = "UNKNOWN";
    SlpUtxoJudgement["INVALID_BATON_DAG"] = "INVALID_BATON_DAG";
    SlpUtxoJudgement["INVALID_TOKEN_DAG"] = "INVALID_TOKEN_DAG";
    SlpUtxoJudgement["NOT_SLP"] = "NOT_SLP";
    SlpUtxoJudgement["SLP_TOKEN"] = "SLP_TOKEN";
    SlpUtxoJudgement["SLP_BATON"] = "SLP_BATON";
    SlpUtxoJudgement["UNSUPPORTED_TYPE"] = "UNSUPPORTED_TYPE";
})(SlpUtxoJudgement = exports.SlpUtxoJudgement || (exports.SlpUtxoJudgement = {}));
var SlpAddressUtxoResult = /** @class */ (function () {
    function SlpAddressUtxoResult() {
        this.slpUtxoJudgement = SlpUtxoJudgement.UNKNOWN;
    }
    return SlpAddressUtxoResult;
}());
exports.SlpAddressUtxoResult = SlpAddressUtxoResult;
//# sourceMappingURL=index.js.map