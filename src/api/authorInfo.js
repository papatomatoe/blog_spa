import { API_URL } from "../constants/api";

export const getAuthorInfo = async () => {
	try {
		const response = await fetch(`${API_URL}/author?populate=*`);
		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
