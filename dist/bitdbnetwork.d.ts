import { SlpTransactionDetails } from './index';
export declare class BitdbNetwork {
    bitdbUrl: string;
    constructor(bitdbUrl?: string);
    getTokenInformation(tokenId: string): Promise<SlpTransactionDetails | {
        error: string;
    }>;
}
