import {
  createBrowserRouter,
} from "react-router";
import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import MyBooKing from "../Pages/MyBooKing";
import DoctorsDetails from "../Pages/DoctorsDetails";
import ErrorPage from "../Pages/ErrorPage";
import Blogs from "../Pages/Blogs";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: (
      <div className="flex items-center justify-center w-full h-screen">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    ),  
    errorElement: <ErrorPage />,  
    children: [
      {
        path: "/",
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
        path: '/doctor-details/:id',
        Component: DoctorsDetails,
        loader: () => fetch('../doctors.json'),
      },
    ],
  },
]);
