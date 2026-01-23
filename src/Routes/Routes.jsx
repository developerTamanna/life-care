import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Blogs from '../Pages/Blogs';
import contact from '../Pages/contact';
import DoctorsDetails from '../Pages/DoctorsDetails';
import ErrorPage from '../Pages/ErrorPage';
import Home from '../Pages/Home';
import MyBooKing from '../Pages/MyBooKing';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    hydrateFallbackElement: (
      <div className="flex items-center justify-center w-full h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        Component: Home,
        loader: () => fetch('../doctors.json'),
      },
      {
        path: 'my-booking',
        Component: MyBooKing,
      },
      {
        path: 'blogs',
        Component: Blogs,
        loader: () => fetch('../blogs.json'),
      },
      {
        path: 'contact',
        Component: contact,
      },
      {
        path: '/doctor-details/:id',
        Component: DoctorsDetails,
        loader: () => fetch('../doctors.json'),
      },
    ],
  },
]);
