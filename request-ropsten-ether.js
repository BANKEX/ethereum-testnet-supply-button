function requestRopstenEther(callback) {
	web3.version.getNetwork((err, netId) => {
		if (netId == "3") {
			web3.eth.getAccounts(function (err, accounts) {
				var address = accounts[0];

				$.get('http://faucet.ropsten.be:3001/donate/' + address, function (data) {				
					if (data.paydate > 0) {
						if (callback)
							callback();
						else
							console.log("ok");
					}
					else {
						console.log("No more requests available");
					}
				});
			});
		}
		else {
			alert('Please select Ropstern network in Metamask');
		}
	});
}