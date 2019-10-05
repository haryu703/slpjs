/// <reference types="node" />
import { SlpAddressUtxoResult, SlpTransactionDetails, SlpBalancesResult, logger } from './index';
import { Slp, SlpProxyValidator, SlpValidator } from './slp';
import { BITBOX } from 'bitbox-sdk';
import { AddressUtxoResult, AddressDetailsResult, TxnDetailsResult } from 'bitcoin-com-rest';
import BigNumber from 'bignumber.js';
import { TransactionHelpers } from './transactionhelpers';
export declare class BitboxNetwork implements SlpValidator {
    BITBOX: BITBOX;
    slp: Slp;
    validator?: SlpValidator;
    txnHelpers: TransactionHelpers;
    logger: logger;
    constructor(BITBOX: BITBOX, validator?: SlpValidator | SlpProxyValidator, logger?: logger);
    getTokenInformation(txid: string, decimalConversion?: boolean): Promise<SlpTransactionDetails | any>;
    getTransactionDetails(txid: string, decimalConversion?: boolean): Promise<any>;
    private getNftParentId;
    getUtxos(address: string): Promise<AddressUtxoResult>;
    getAllSlpBalancesAndUtxos(address: string | string[]): Promise<SlpBalancesResult | {
        address: string;
        result: SlpBalancesResult;
    }[]>;
    simpleTokenSend(tokenId: string, sendAmounts: BigNumber | BigNumber[], inputUtxos: SlpAddressUtxoResult[], tokenReceiverAddresses: string | string[], changeReceiverAddress: string, requiredNonTokenOutputs?: {
        satoshis: number;
        receiverAddress: string;
    }[]): Promise<string>;
    simpleBchSend(sendAmounts: BigNumber | BigNumber[], inputUtxos: SlpAddressUtxoResult[], bchReceiverAddresses: string | string[], changeReceiverAddress: string): Promise<string>;
    simpleTokenGenesis(tokenName: string, tokenTicker: string, tokenAmount: BigNumber, documentUri: string | null, documentHash: Buffer | null, decimals: number, tokenReceiverAddress: string, batonReceiverAddress: string, bchChangeReceiverAddress: string, inputUtxos: SlpAddressUtxoResult[]): Promise<string>;
    simpleNFT1ParentGenesis(tokenName: string, tokenTicker: string, tokenAmount: BigNumber, documentUri: string | null, documentHash: Buffer | null, tokenReceiverAddress: string, batonReceiverAddress: string, bchChangeReceiverAddress: string, inputUtxos: SlpAddressUtxoResult[], decimals?: number): Promise<string>;
    simpleNFT1ChildGenesis(nft1GroupId: string, tokenName: string, tokenTicker: string, documentUri: string | null, documentHash: Buffer | null, tokenReceiverAddress: string, bchChangeReceiverAddress: string, inputUtxos: SlpAddressUtxoResult[], allowBurnAnyAmount?: boolean): Promise<string>;
    simpleTokenMint(tokenId: string, mintAmount: BigNumber, inputUtxos: SlpAddressUtxoResult[], tokenReceiverAddress: string, batonReceiverAddress: string, changeReceiverAddress: string): Promise<string>;
    simpleTokenBurn(tokenId: string, burnAmount: BigNumber, inputUtxos: SlpAddressUtxoResult[], changeReceiverAddress: string): Promise<string>;
    getUtxoWithRetry(address: string, retries?: number): Promise<AddressUtxoResult>;
    getUtxoWithTxDetails(address: string): Promise<SlpAddressUtxoResult[]>;
    getTransactionDetailsWithRetry(txids: string[], retries?: number): Promise<TxnDetailsResult[] | undefined>;
    getAddressDetailsWithRetry(address: string, retries?: number): Promise<AddressDetailsResult[] | undefined>;
    sendTx(hex: string): Promise<string>;
    monitorForPayment(paymentAddress: string, fee: number, onPaymentCB: Function): Promise<void>;
    getRawTransactions(txids: string[]): Promise<string[]>;
    processUtxosForSlp(utxos: SlpAddressUtxoResult[]): Promise<SlpBalancesResult>;
    isValidSlpTxid(txid: string): Promise<boolean>;
    validateSlpTransactions(txids: string[]): Promise<string[]>;
    private setRemoteValidatorUrl;
}
