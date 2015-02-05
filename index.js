var blacklist = [
	'.cmo',
	'.ocm',
	'gamil.com',
	'gmai.com',
	'gmail.co',
	'gmail.con',
	'gmail.om',
	'gmailc.om',
	'gmaill.com',
	'gmal.com',
	'gmeil.com',
	'gmial.com',
	'gnail.com',
	'hotamil.com',
	'hotmai.com',
	'hotmail.co',
	'hotmail.con',
	'hotmail.om',
	'hotmail.cm',
	'hotmailc.om',
	'hotmeil.com',
	'hotmial.com',
	'hotmali.com',
	'hotmsil.com',
	'hoymail@com',
	'hormail.com',
	'hptmail.com',
	'htomail.com',
	'mgail.com',
	'yahoo.om'
];

module.exports = {
	contains: contains,
	list: blacklist
};

function contains(email) {
	if (!email) {
		return false;
	}

	var domain = email.split('@').pop();
	return blacklist.indexOf(domain) > -1;
}
