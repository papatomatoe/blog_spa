import { useState, useEffect } from "react";
import { getAuthorInfo } from "../api/authorInfo";

export const useAuthorInfo = () => {
	const [authorInfo, setAuthorInfo] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getAuthorInfo()
			.then((resp) => {
				resp.error ? setIsError(true) : setAuthorInfo(resp);
			})
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, []);

	return { authorInfo, isLoading, isError };
};
