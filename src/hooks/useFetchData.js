import { useState, useEffect } from "react";

export const useFetchData = (func) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		func()
			.then((resp) => {
				resp.error ? setIsError(true) : setData(resp);
			})
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, []);

	return { data, isLoading, isError };
};
