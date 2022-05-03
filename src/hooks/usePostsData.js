import { useState, useEffect } from "react";
import { getPosts } from "../api/posts";

export const useAuthorInfo = () => {
	const [posts, setPosts] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getPosts()
			.then((resp) => {
				resp.error ? setIsError(true) : setPosts(resp);
			})
			.catch(() => setIsError(true))
			.finally(() => setIsLoading(false));
	}, []);

	return { posts, isLoading, isError };
};
