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
} from "../types";

export interface EventOptions {
  filter?: object;
  fromBlock?: BlockType;
  topics?: string[];
}

export type Claimed = ContractEventLog<{
  id: string;
  caller: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type Committed = ContractEventLog<{
  id: string;
  caller: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;
export type OwnershipTransferred = ContractEventLog<{
  previousOwner: string;
  newOwner: string;
  0: string;
  1: string;
}>;
export type ProjectCreated = ContractEventLog<{
  id: string;
  name: string;
  symbol: string;
  description: string;
  target: string;
  minInvest: string;
  maxInvest: string;
  totalSupply: string;
  authorAddress: string;
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
}>;
export type ProjectStatusChanged = ContractEventLog<{
  id: string;
  status: string;
  0: string;
  1: string;
}>;
export type Withdrawed = ContractEventLog<{
  id: string;
  caller: string;
  amount: string;
  0: string;
  1: string;
  2: string;
}>;

export interface FansSociety extends BaseContract {
  constructor(
    jsonInterface: any[],
    address?: string,
    options?: ContractOptions
  ): FansSociety;
  clone(): FansSociety;
  methods: {
    abortProject(_id: number | string | BN): NonPayableTransactionObject<void>;

    claimProjectTokens(
      _id: number | string | BN
    ): NonPayableTransactionObject<void>;

    commitOnProject(_id: number | string | BN): PayableTransactionObject<void>;

    commitments(
      arg0: number | string | BN,
      arg1: string
    ): NonPayableTransactionObject<string>;

    count(): NonPayableTransactionObject<string>;

    createProject(
      _authorAddress: string,
      _name: string,
      _symbol: string,
      _description: string,
      _target: number | string | BN,
      _minInvest: number | string | BN,
      _maxInvest: number | string | BN,
      _totalSupply: number | string | BN
    ): NonPayableTransactionObject<void>;

    launchProject(_id: number | string | BN): NonPayableTransactionObject<void>;

    owner(): NonPayableTransactionObject<string>;

    projects(arg0: number | string | BN): NonPayableTransactionObject<{
      name: string;
      symbol: string;
      description: string;
      fund: string;
      target: string;
      minInvest: string;
      maxInvest: string;
      totalSupply: string;
      status: string;
      authorAddress: string;
      tokenAddress: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
    }>;

    renounceOwnership(): NonPayableTransactionObject<void>;

    transferOwnership(newOwner: string): NonPayableTransactionObject<void>;

    withdrawOnProject(
      _id: number | string | BN
    ): NonPayableTransactionObject<void>;
  };
  events: {
    Claimed(cb?: Callback<Claimed>): EventEmitter;
    Claimed(options?: EventOptions, cb?: Callback<Claimed>): EventEmitter;

    Committed(cb?: Callback<Committed>): EventEmitter;
    Committed(options?: EventOptions, cb?: Callback<Committed>): EventEmitter;

    OwnershipTransferred(cb?: Callback<OwnershipTransferred>): EventEmitter;
    OwnershipTransferred(
      options?: EventOptions,
      cb?: Callback<OwnershipTransferred>
    ): EventEmitter;

    ProjectCreated(cb?: Callback<ProjectCreated>): EventEmitter;
    ProjectCreated(
      options?: EventOptions,
      cb?: Callback<ProjectCreated>
    ): EventEmitter;

    ProjectStatusChanged(cb?: Callback<ProjectStatusChanged>): EventEmitter;
    ProjectStatusChanged(
      options?: EventOptions,
      cb?: Callback<ProjectStatusChanged>
    ): EventEmitter;

    Withdrawed(cb?: Callback<Withdrawed>): EventEmitter;
    Withdrawed(options?: EventOptions, cb?: Callback<Withdrawed>): EventEmitter;

    allEvents(options?: EventOptions, cb?: Callback<EventLog>): EventEmitter;
  };

  once(event: "Claimed", cb: Callback<Claimed>): void;
  once(event: "Claimed", options: EventOptions, cb: Callback<Claimed>): void;

  once(event: "Committed", cb: Callback<Committed>): void;
  once(
    event: "Committed",
    options: EventOptions,
    cb: Callback<Committed>
  ): void;

  once(event: "OwnershipTransferred", cb: Callback<OwnershipTransferred>): void;
  once(
    event: "OwnershipTransferred",
    options: EventOptions,
    cb: Callback<OwnershipTransferred>
  ): void;

  once(event: "ProjectCreated", cb: Callback<ProjectCreated>): void;
  once(
    event: "ProjectCreated",
    options: EventOptions,
    cb: Callback<ProjectCreated>
  ): void;

  once(event: "ProjectStatusChanged", cb: Callback<ProjectStatusChanged>): void;
  once(
    event: "ProjectStatusChanged",
    options: EventOptions,
    cb: Callback<ProjectStatusChanged>
  ): void;

  once(event: "Withdrawed", cb: Callback<Withdrawed>): void;
  once(
    event: "Withdrawed",
    options: EventOptions,
    cb: Callback<Withdrawed>
  ): void;
}
