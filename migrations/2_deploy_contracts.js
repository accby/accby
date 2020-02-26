const AccbyToken = artifacts.require("./AccbyToken.sol");

module.exports = function (deployer, network, accounts) {
		console.log(`Accounts: ${accounts}`);

		let accbyToken = null;

		const owner = accounts[0];
		const admin = accounts[1];

		return deployer.deploy(
			AccbyToken, admin,  { from: owner }
		).then(() => {
			return AccbyToken.deployed().then(instance => {
				accbyToken = instance;
				console.log(`AccbyToken deployed at \x1b[36m${instance.address}\x1b[0m`)
			});
		});
};		
