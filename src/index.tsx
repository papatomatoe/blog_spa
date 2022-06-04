import ReactDom from 'react-dom';
import App from './App';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600 * 1000,
      refetchInterval: 600 * 1000,
      cacheTime: 600 * 1000,
      refetchIntervalInBackground: true,
      refetchOnReconnect: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDom.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);
