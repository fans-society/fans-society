/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { OwnableContract } from "./Ownable";
import { CrowdfundingContract } from "./Crowdfunding";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "Ownable"): OwnableContract;
      require(name: "Crowdfunding"): CrowdfundingContract;
    }
  }
}

export { OwnableContract, OwnableInstance } from "./Ownable";
export { CrowdfundingContract, CrowdfundingInstance } from "./Crowdfunding";
