/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import BN from "bn.js";
import { EventData, PastEventOptions } from "web3-eth-contract";

export interface ProjectTokenFactoryContract
  extends Truffle.Contract<ProjectTokenFactoryInstance> {
  "new"(
    meta?: Truffle.TransactionDetails
  ): Promise<ProjectTokenFactoryInstance>;
}

export interface OwnershipTransferred {
  name: "OwnershipTransferred";
  args: {
    previousOwner: string;
    newOwner: string;
    0: string;
    1: string;
  };
}

type AllEvents = OwnershipTransferred;

export interface ProjectTokenFactoryInstance extends Truffle.ContractInstance {
  createToken: {
    (
      _name: string,
      _symbol: string,
      _fsociety: string,
      _fsocietySupply: number | BN | string,
      _author: string,
      _authorSupply: number | BN | string,
      _otherSupply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<Truffle.TransactionResponse<AllEvents>>;
    call(
      _name: string,
      _symbol: string,
      _fsociety: string,
      _fsocietySupply: number | BN | string,
      _author: string,
      _authorSupply: number | BN | string,
      _otherSupply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    sendTransaction(
      _name: string,
      _symbol: string,
      _fsociety: string,
      _fsocietySupply: number | BN | string,
      _author: string,
      _authorSupply: number | BN | string,
      _otherSupply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      _name: string,
      _symbol: string,
      _fsociety: string,
      _fsocietySupply: number | BN | string,
      _author: string,
      _authorSupply: number | BN | string,
      _otherSupply: number | BN | string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

  renounceOwnership: {
    (txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(txDetails?: Truffle.TransactionDetails): Promise<void>;
    sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
    estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
  };

  tokens(arg0: string, txDetails?: Truffle.TransactionDetails): Promise<string>;

  transferOwnership: {
    (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
      Truffle.TransactionResponse<AllEvents>
    >;
    call(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<void>;
    sendTransaction(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;
    estimateGas(
      newOwner: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<number>;
  };

  methods: {
    createToken: {
      (
        _name: string,
        _symbol: string,
        _fsociety: string,
        _fsocietySupply: number | BN | string,
        _author: string,
        _authorSupply: number | BN | string,
        _otherSupply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<Truffle.TransactionResponse<AllEvents>>;
      call(
        _name: string,
        _symbol: string,
        _fsociety: string,
        _fsocietySupply: number | BN | string,
        _author: string,
        _authorSupply: number | BN | string,
        _otherSupply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      sendTransaction(
        _name: string,
        _symbol: string,
        _fsociety: string,
        _fsocietySupply: number | BN | string,
        _author: string,
        _authorSupply: number | BN | string,
        _otherSupply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        _name: string,
        _symbol: string,
        _fsociety: string,
        _fsocietySupply: number | BN | string,
        _author: string,
        _authorSupply: number | BN | string,
        _otherSupply: number | BN | string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };

    owner(txDetails?: Truffle.TransactionDetails): Promise<string>;

    renounceOwnership: {
      (txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(txDetails?: Truffle.TransactionDetails): Promise<void>;
      sendTransaction(txDetails?: Truffle.TransactionDetails): Promise<string>;
      estimateGas(txDetails?: Truffle.TransactionDetails): Promise<number>;
    };

    tokens(
      arg0: string,
      txDetails?: Truffle.TransactionDetails
    ): Promise<string>;

    transferOwnership: {
      (newOwner: string, txDetails?: Truffle.TransactionDetails): Promise<
        Truffle.TransactionResponse<AllEvents>
      >;
      call(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<void>;
      sendTransaction(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<string>;
      estimateGas(
        newOwner: string,
        txDetails?: Truffle.TransactionDetails
      ): Promise<number>;
    };
  };

  getPastEvents(event: string): Promise<EventData[]>;
  getPastEvents(
    event: string,
    options: PastEventOptions,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
  getPastEvents(event: string, options: PastEventOptions): Promise<EventData[]>;
  getPastEvents(
    event: string,
    callback: (error: Error, event: EventData) => void
  ): Promise<EventData[]>;
}
