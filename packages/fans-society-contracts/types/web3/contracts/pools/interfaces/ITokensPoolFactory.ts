/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type BN from "bn.js";
import type { ContractOptions } from "web3-eth-contract";
import type { EventLog } from "web3-core";
import type { EventEmitter } from "events";
import type {
  Callback,
  PayableTransactionObject,
  NonPayableTransactionObject,
  BlockType,
  ContractEventLog,
  BaseContract,
} from "../../../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export interface ITokensPoolFactory extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): ITokensPoolFactory;
  clone(): ITokensPoolFactory;
  methods: {
    createPool(
      _token1: string,
      _token2: string
    ): NonPayableTransactionObject<{
      poolAddress: string;
      poolHash: string;
      0: string;
      1: string;
    }>;

    getPoolByHash(
      _hash: string | number[]
    ): NonPayableTransactionObject<string>;

    getPoolByTokensPair(
      _token1: string,
      _token2: string
    ): NonPayableTransactionObject<string>;

    getTokenPools(_token: string): NonPayableTransactionObject<string[]>;
  };
  events: {
    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };
}