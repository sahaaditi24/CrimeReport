const CrimeReport = artifacts.require("CrimeReport");

module.exports = function (deployer, network, accounts) {
    deployer.deploy(CrimeReport, "SampleCrime", "SampleDescription", "123456", "1");
};
