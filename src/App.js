import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RootLayout from "./components/RootLayout";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/restaurant/:restaurantId",
          element: <RestaurantMenu />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
