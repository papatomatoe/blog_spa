import { API_URL } from "../constants/api";

export const getPosts = async () => {
	try {
		const response = await fetch(`${API_URL}/posts?populate=*`);
		return await response.json();
	} catch (err) {
		console.error(err);
	}
};
