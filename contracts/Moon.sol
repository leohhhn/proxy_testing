// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Moon is Initializable, UUPSUpgradeable, OwnableUpgradeable {

    uint256 public distance;
    string public name;

    function initialize() public initializer {
        __Ownable_init();
        distance = 2 ** 256 - 1;
        name = "MoonV1";
    }

    function updateDistance() public {
        distance--;
    }

    function _authorizeUpgrade(address newImplementation)
    internal
    override
    onlyOwner
    {}
}

contract MoonV2 is Moon {
    uint256 lol;
    function version() pure virtual public returns (string memory){
        return "MoonV2!";
    }
}
contract MoonV3 is MoonV2 {
    function version() pure override public returns (string memory){
        return "MoonV3!";
    }
}
