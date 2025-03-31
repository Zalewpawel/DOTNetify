import { type User } from './types';

export const getCurrentUser = async () => {
	// const token = (await cookies()).get('.AspNetCore.Identity.Application')?.value;

	// if (!token) {
	// 	return null;
	// }

	// const response = await fetch(`${API_URL}/api/Users/current`, {
	// 	credentials: 'include',
	// 	headers: {
	// 		accept: 'application/json',
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// });

	return {
		id: '751185a6-057e-474f-a52e-6cf30933e578',
		username: 'test@o2.pl',
		email: 'test@o2.pl',
		role: 'admin',
	} as User;
};
