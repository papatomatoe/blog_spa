import { API_URL } from "../constants/api";

const getAdaptedContacts = (data) => ({
	email: data.data.attributes.email,
	phone: data.data.attributes.phone,
});

export const getContacts = async () => {
	try {
		const response = await fetch(`${API_URL}/contact?populate=*`);
		const data = await response.json();
		console.log(data);
		return getAdaptedContacts(data);
	} catch (err) {
		console.error(err);
	}
};
