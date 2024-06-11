import React, { Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Spinner from './components/Spinner.tsx';
import MainLayout from './layouts/MainLayout.tsx';

const AboutPage = React.lazy(() => import('./pages/AboutPage.tsx'));
const AdminPage = React.lazy(() => import('./pages/AdminPage.tsx'));
const ContactPage = React.lazy(() => import('./pages/ContactPage.tsx'));
const HomePage = React.lazy(() => import('./pages/HomePage.tsx'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Spinner loading={true} />}>
            <HomePage />
          </Suspense>
        }
      />
      <Route
        path="/about"
        element={
          <Suspense fallback={<Spinner loading={true} />}>
            <AboutPage />
          </Suspense>
        }
      />
      <Route
        path="/contact"
        element={
          <Suspense fallback={<Spinner loading={true} />}>
            <ContactPage />
          </Suspense>
        }
      />
      <Route
        path="/admin"
        element={
          <Suspense fallback={<Spinner loading={true} />}>
            <AdminPage />
          </Suspense>
        }
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
