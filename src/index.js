import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: Infinity,
			refetchOnReconnect: false,
			refetchOnMount: false,
			refetchOnWindowFocus: false,
		},
	},
});

ReactDom.render(
	<QueryClientProvider client={queryClient}>
		<App />
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
	document.getElementById("root")
);
