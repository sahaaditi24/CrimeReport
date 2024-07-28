const CrimeReport = artifacts.require("CrimeReport");

module.exports = function (deployer) {
  deployer.deploy(CrimeReport);
};