import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import MainLayout from "./component/MainLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import BookingVisitForm from "./component/bookingsytem";
import IndexPage from "./component/Index/IndexPage";
import AboutUs from "./component/About/About";
import Consultation from "./component/Consultation/Consultation";
import Footer from "./component/Footer/Footer";
import Contact from "./utils/Contact";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Outlet /> {/* Renders the child routes */}
        </>
      ),
      children: [
        {
          path: "/",
          element: <IndexPage />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
        },
        {
          path: "/consultation",
          element: <Consultation />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/footer",
          element: <Footer />,
        },
        {
          path: "/BookingVisitForm",
          element: (
            <ProtectedRoute>
              <BookingVisitForm />
            </ProtectedRoute>
          ),
        },
      ],
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;