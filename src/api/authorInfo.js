import { API_URL } from "../constants/api";

const getAdaptedAuthorInfoData = (data) => {
	return {
		title: data.attributes.title,
		description: data.attributes.description,
		fullDescription: data.attributes.fullDescription,
		desktopImage: data.attributes.desktop.data.attributes.url,
		mobileImage: data.attributes.mobile.data.attributes.url,
	};
};

export const getAuthorInfo = async () => {
	try {
		const response = await fetch(`${API_URL}/author?populate=*`);
		const data = await response.json();

		const authorInfo = data.data ? getAdaptedAuthorInfoData(data.data) : data;

		return authorInfo;
	} catch (err) {
		console.error(err);
	}
};
