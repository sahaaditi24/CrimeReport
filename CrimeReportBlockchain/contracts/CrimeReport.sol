// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrimeReport {
    string public crime;
    string public description;
    string public pincode;
    string public crimeId;

    constructor(string memory _crime, string memory _description, string memory _pincode, string memory _crimeId) {
        crime = _crime;
        description = _description;
        pincode = _pincode;
        crimeId = _crimeId;
    }
}
