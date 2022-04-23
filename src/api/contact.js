import { API_URL } from "../constants/api";

export const getContacts = async () => {
	try {
		const response = await fetch(`${API_URL}/contact?populate=*`);
		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
