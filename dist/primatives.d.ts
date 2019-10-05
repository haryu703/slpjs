/// <reference types="node" />
export declare namespace Primatives {
    class ArraySource {
        rawBytes: number[];
        index: number;
        constructor(rawBytes: number[], index?: number);
        readByte(): number;
        hasMoreBytes(): boolean;
        getPosition(): number;
    }
    class ByteStream {
        source: ArraySource;
        constructor(source: ArraySource);
        readByte(): number;
        readBytes(num: number): number[];
        readInt(num: number): number;
        readVarInt(): number;
        readString(): number[];
        readHexBytes(num: number): string;
        hasMoreBytes(): boolean;
        getPosition(): number;
    }
    interface TransactionInput {
        previousTxHash: string;
        previousTxOutIndex: number;
        scriptSig: number[];
        sequenceNo: string;
        incomplete: boolean;
        satoshis?: number;
    }
    class Transaction {
        version: number;
        inputs: TransactionInput[];
        outputs: any[];
        lockTime: number;
        constructor(version?: number, inputs?: TransactionInput[], outputs?: any[], lockTime?: number);
        toHex(): string;
        serializeInto(stream: ArraySink): void;
        static parseFromBuffer(buffer: Buffer): Transaction;
        static parse(stream: ByteStream, mayIncludeUnsignedInputs?: boolean): Transaction;
    }
    class ArraySink {
        rawBytes: number[];
        constructor(rawBytes?: number[]);
        writeByte(byte: number): void;
        writeBytes(bytes: number[]): void;
        writeInt(number: number, count: number): void;
        writeVarInt(num: number): void;
        writeString(bytes: number[]): void;
        writeHexBytes(text: string): void;
    }
}
