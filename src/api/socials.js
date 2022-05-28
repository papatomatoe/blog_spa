import { API_URL } from "../constants/api";

const getAdaptedSocials = (response) => {
	return response.map((el) => ({
		id: el.id,
		title: el.attributes.title,
		link: el.attributes.link,
		icon: el.attributes.icon.data.attributes.url,
	}));
};

export const getSocials = async () => {
	try {
		const response = await fetch(`${API_URL}/socials?populate=*`);
		const data = await response.json();
		return data.data ? getAdaptedSocials(data.data) : data;
	} catch (err) {
		console.error(err);
	}
};
