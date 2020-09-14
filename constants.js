module.exports = {
	roles: [
		{
			Id: 1,
			Name: 'CEO',
			Parent: 0
		},
		{
			Id: 2,
			Name: 'President',
			Parent: 1
		},
		{
			Id: 3,
			Name: 'VP',
			Parent: 2
		},
		{
			Id: 4,
			Name: 'Director',
			Parent: 3
		},
		{
			Id: 5,
			Name: 'Manager',
			Parent: 4
		},
		{
			Id: 6,
			Name: 'Supervisor',
			Parent: 5
		},
		{
			Id: 7,
			Name: 'Employee',
			Parent: 6
		}
	],
	users: [
		{
			Id: 1,
			Name: 'Charles CEO',
			Role: 1
		},
		{
			Id: 2,
			Name: 'Pam President',
			Role: 2
		},
		{
			Id: 3,
			Name: 'Paul President',
			Role: 2
		},
		{
			Id: 4,
			Name: 'Victor VP',
			Role: 3
		},
		{
			Id: 5,
			Name: 'Vince VP',
			Role: 3
		},
		{
			Id: 6,
			Name: 'Diane Director',
			Role: 4
		},
		{
			Id: 7,
			Name: 'Mark Manager',
			Role: 5
		},
		{
			Id: 8,
			Name: 'Mary Manager',
			Role: 5
		},
		{
			Id: 9,
			Name: 'Mariya Manager',
			Role: 5
		},
		{
			Id: 10,
			Name: 'Sam Supervisor',
			Role: 6
		},
		{
			Id: 11,
			Name: 'Shelley Supervisor',
			Role: 6
		},
		{
			Id: 12,
			Name: 'Stan Supervisor',
			Role: 6
		},
		{
			Id: 13,
			Name: 'Sally Supervisor',
			Role: 6
		},
		{
			Id: 14,
			Name: 'Eric Employee',
			Role: 7
		},
		{
			Id: 15,
			Name: 'Elizabeth Employee',
			Role: 7
		},
		{
			Id: 16,
			Name: 'Erin Employee',
			Role: 7
		},
		{
			Id: 17,
			Name: 'Elsa Employee',
			Role: 7
		},
		{
			Id: 18,
			Name: 'Ethan Employee',
			Role: 7
		}
	]
};
