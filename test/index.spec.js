var blacklist = require('../');

describe('signup blacklist', function () {
	describe('does not block common email domains', function () {
		it('accepts Gmail addresses', function () {
			var email = 'jonashmosbech@gmail.com';
			var isBlocked = blacklist.contains(email);
			expect(isBlocked, email).to.be.false;
		});

		it('accepts Hotmail addresses', function () {
			var email = 'jonasmosbech@hotmail.com';
			var isBlocked = blacklist.contains(email);
			expect(isBlocked, email).to.be.false;
		});
	});

	describe('blocks domains on blacklist', function () {
		var isBlocked,
			email = 'jonas@example.com';

		before(function(){
			blacklist.list.push('example.com');
			isBlocked = blacklist.contains(email);
		});

		after(function(){
			blacklist.list.pop();
		});

		it('rejects invalid domain', function () {
			expect(isBlocked, email).to.be.true;
		});
	});
});
