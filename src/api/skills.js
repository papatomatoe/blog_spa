import { API_URL } from "../constants/api";

const getAdaptedSkills = (response) => {
	return response.map((el) => el.attributes.skill);
};

export const getSkills = async () => {
	try {
		const response = await fetch(`${API_URL}/skills`);
		const data = await response.json();
		return data.data ? getAdaptedSkills(data.data) : data;
	} catch (err) {
		console.error(err);
	}
};
