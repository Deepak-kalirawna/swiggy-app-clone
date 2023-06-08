import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import RootLayout from "./components/RootLayout";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./Cart/Cart";
import { v4 as uuidv4 } from "uuid";
import Order from "./Cart/Order";

function App() {
  const uniqueKey = uuidv4();
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/restaurant/:restaurantId",
          element: <RestaurantMenu key={uniqueKey} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
