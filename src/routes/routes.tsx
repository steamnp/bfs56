import { createBrowserRouter } from "react-router-dom";
import Root from "./root"; // Adjust imports as necessary
import ErrorPage from "./error-page"; // Adjust imports as necessary
import Contact from "./contacts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactId",
    element: <Contact />,
  },
]);
