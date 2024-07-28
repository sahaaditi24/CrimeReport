// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CrimeReport {
    struct Report {
        string firNumber;
        string crimePlace;
        string description;
    }

    Report[] public reports;

    event ReportFiled(uint256 indexed reportId, string firNumber);

    function fileReport(string memory _firNumber, string memory _crimePlace, string memory _description) public {
        reports.push(Report(_firNumber, _crimePlace, _description));
        emit ReportFiled(reports.length - 1, _firNumber);
    }

    function getReport(uint256 _reportId) public view returns (string memory, string memory, string memory) {
        require(_reportId < reports.length, "Report does not exist");
        Report memory report = reports[_reportId];
        return (report.firNumber, report.crimePlace, report.description);
    }
}