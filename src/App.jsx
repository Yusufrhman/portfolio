import { RouterProvider } from "react-router/dom";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { createBrowserRouter } from "react-router";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "",
          element: <LandingPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
