/// <reference types="node" />
import { SlpAddressUtxoResult, utxo, SlpPaymentRequest } from './index';
import { AddressUtxoResult } from 'bitcoin-com-rest';
import BigNumber from 'bignumber.js';
export declare class Utils {
    static isCashAddress(address: string): any;
    static toCashAddress(address: string): string;
    static slpAddressFromHash160(hash: Uint8Array, network?: string, addressType?: string): string;
    static isSlpAddress(address: string): boolean;
    static toSlpAddress(address: string): string;
    static isLegacyAddress(address: string): boolean;
    static toLegacyAddress(address: string): string;
    static isMainnet(address: string): boolean;
    static txnBuilderString(address: string): "bitcoincash" | "bchtest";
    static mapToSlpAddressUtxoResultArray(bitboxResult: AddressUtxoResult): SlpAddressUtxoResult[];
    static mapToUtxoArray(utxos: SlpAddressUtxoResult[]): utxo[];
    static getPushDataOpcode(data: number[] | Buffer): number | number[];
    static int2FixedBuffer(amount: BigNumber): Buffer;
    static buffer2BigNumber(amount: Buffer): BigNumber;
    static encodeScript(script: (number | number[])[]): Buffer;
    static buildSlpUri(address: string, amountBch?: number, amountToken?: number, tokenId?: string): string;
    static parseSlpUri(uri: string): SlpPaymentRequest;
    static get_BIP62_locktime_hex(unixtime: number): string | null;
    static convertBE2LE32(hex: string): string | null;
    static isHexString(hex: string): boolean;
}
