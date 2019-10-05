/// <reference types="node" />
import BigNumber from 'bignumber.js';
export declare class SlpTokenType1 {
    static readonly lokadIdHex: string;
    static buildGenesisOpReturn(ticker: string | null, name: string | null, documentUri: string | null, documentHashHex: string | null, decimals: number, batonVout: number | null, initialQuantity: BigNumber, type?: number): Buffer;
    static buildSendOpReturn(tokenIdHex: string, outputQtyArray: BigNumber[], type?: number): Buffer;
    static buildMintOpReturn(tokenIdHex: string, batonVout: number | null, mintQuantity: BigNumber, type?: number): Buffer;
}
