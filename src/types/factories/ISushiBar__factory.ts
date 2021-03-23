/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { ISushiBar } from "../ISushiBar";

export class ISushiBar__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISushiBar {
    return new Contract(address, _abi, signerOrProvider) as ISushiBar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "enter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
