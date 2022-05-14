import { API_URL } from "../constants/api";

export const getSocials = async () => {
	try {
		const response = await fetch(`${API_URL}/socials?populate=*`);
		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
