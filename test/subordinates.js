var expect = require('chai').expect;
var utils = require('../utils.js');
var constants = require('../constants.js');

let roles = constants.roles;
let users = constants.users;

describe('Subordinates', function() {
	describe('Employee', function() {
		it('should return empty array since employees have no subordinates', function() {
			expect(utils.getSubordinates(15, roles, users, [])).to.deep.equal([]);
		});
	});

	describe('Supervisor', function() {
		it('should return array of all subordinates of a Supervisor', function() {
			var result = [
				{ Id: 14, Name: 'Eric Employee', Role: 7 },
				{ Id: 15, Name: 'Elizabeth Employee', Role: 7 },
				{ Id: 16, Name: 'Erin Employee', Role: 7 },
				{ Id: 17, Name: 'Elsa Employee', Role: 7 },
				{ Id: 18, Name: 'Ethan Employee', Role: 7 },
			]
			expect(utils.getSubordinates(13, roles, users, [])).to.deep.equal(result);
		});
	});

	describe('CEO', function() {
		it('should return all users except CEO, since everyone is a subordinate of CEO role', function() {
			var result = [
				{ Id: 2, Name: 'Pam President', Role: 2 },
				{ Id: 4, Name: 'Victor VP', Role: 3 },
				{ Id: 6, Name: 'Diane Director', Role: 4 },
				{ Id: 7, Name: 'Mark Manager', Role: 5 },
				{ Id: 10, Name: 'Sam Supervisor', Role: 6 },
				{ Id: 14, Name: 'Eric Employee', Role: 7 },
				{ Id: 15, Name: 'Elizabeth Employee', Role: 7 },
				{ Id: 16, Name: 'Erin Employee', Role: 7 },
				{ Id: 17, Name: 'Elsa Employee', Role: 7 },
				{ Id: 18, Name: 'Ethan Employee', Role: 7 },
				{ Id: 11, Name: 'Shelley Supervisor', Role: 6 },
				{ Id: 12, Name: 'Stan Supervisor', Role: 6 },
				{ Id: 13, Name: 'Sally Supervisor', Role: 6 },
				{ Id: 8, Name: 'Mary Manager', Role: 5 },
				{ Id: 9, Name: 'Mariya Manager', Role: 5 },
				{ Id: 5, Name: 'Vince VP', Role: 3 },
				{ Id: 3, Name: 'Paul President', Role: 2 }
			];
			expect(utils.getSubordinates(1, roles, users, [])).to.deep.equal(result);
		});
	});

	describe('Nonexistent User', function() {
		it('should return undefined since user does not exist', function() {
			expect(utils.getSubordinates(1000, roles, users, [])).to.deep.equal(undefined);
		});
	});
});
