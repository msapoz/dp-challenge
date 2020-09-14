module.exports = {
	getSubordinates: function(userId, roles, users, subordinateArr) {
		// Find the user with given userId
		var user = users.find((u) => {
			return u.Id === userId;
		});

		if (user) {
			// Find role for the provided user
			var role = roles.find((r) => {
				return user.Role === r.Id;
			});

			if (role) {
				// Find next subordinate role for the provider user
				var subordinateRole = roles.find((r) => {
					return r.Parent === role.Id;
				});

				if (subordinateRole) {
					// Find users with the subordinate role and add it to array
					users.forEach((u) => {
						if (u.Role == subordinateRole.Id) {
							// Avoid duplicate users in the subordinate array.
							var existingUser = subordinateArr.find((usr) => {
								return usr.Id === u.Id;
							});

							if (!existingUser) {
								subordinateArr.push(u);
								// Add all unique subordinates under the role of the current subordinate
								subordinateArr.concat(module.exports.getSubordinates(u.Id, roles, users, subordinateArr));
							}
						}
					});
				}
			}
		} else {
			return undefined; // user does not exist
		}

		return subordinateArr;
	}
};
