import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostsPage from './pages/PostsPage';
import ContactsPage from './pages/ContactsPage';
import Error404 from './pages/Error404';

import './styles/main.sass';
import ErrorBoundary from './components/ErrorBoundary';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <ErrorBoundary>
                <HomePage />
              </ErrorBoundary>
            }
          />
          <Route
            path="about"
            element={
              <ErrorBoundary>
                <AboutPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="posts"
            element={
              <ErrorBoundary>
                <PostsPage />
              </ErrorBoundary>
            }
          />
          <Route
            path="contacts"
            element={
              <ErrorBoundary>
                <ContactsPage />
              </ErrorBoundary>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
