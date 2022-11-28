// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import { Initializable } from '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import { IERC20MetadataUpgradeable } from '@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol';

import { ITokensPool } from './interfaces/ITokensPool.sol';

contract TokensPool is Initializable, ITokensPool {
	address private token1;
	address private token2;
	uint private vault1;
	uint private vault2;

	function initialize(
		address _token1,
		address _token2
	) public virtual initializer {
		token1 = _token1;
		token2 = _token2;
	}
}
