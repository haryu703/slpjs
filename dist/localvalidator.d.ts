import { SlpTransactionDetails, logger } from './index';
import { SlpValidator, Slp } from './slp';
import { BITBOX } from 'bitbox-sdk';
import BigNumber from 'bignumber.js';
export interface Validation {
    validity: boolean | null;
    parents: Parent[];
    details: SlpTransactionDetails | null;
    invalidReason: string | null;
    waiting: boolean;
}
export declare type GetRawTransactionsAsync = (txid: string[]) => Promise<string[]>;
interface Parent {
    txid: string;
    vout: number;
    versionType: number;
    valid: boolean | null;
    inputQty: BigNumber | null;
}
export declare class LocalValidator implements SlpValidator {
    BITBOX: BITBOX;
    cachedRawTransactions: {
        [txid: string]: string;
    };
    cachedValidations: {
        [txid: string]: Validation;
    };
    getRawTransactions: GetRawTransactionsAsync;
    slp: Slp;
    logger: logger;
    constructor(BITBOX: BITBOX, getRawTransactions: GetRawTransactionsAsync, logger?: logger);
    addValidationFromStore(hex: string, isValid: boolean): void;
    waitForCurrentValidationProcessing(txid: string): Promise<void>;
    waitForTransactionDownloadToComplete(txid: string): Promise<void>;
    retrieveRawTransaction(txid: string): Promise<string>;
    isValidSlpTxid(txid: string, tokenIdFilter?: string, tokenTypeFilter?: number): Promise<boolean>;
    _isValidSlpTxid(txid: string, tokenIdFilter?: string, tokenTypeFilter?: number): Promise<boolean>;
    validateSlpTransactions(txids: string[]): Promise<string[]>;
}
export {};
