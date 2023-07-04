import { Route } from "react-router-dom";
import {
  Home,
  Dashboard,
  Members,
  Organizations,
  Product,
  ViewProductDetails,
  EditProductDetails,
} from "../pages";

const PrivateRoutes = (
  <Route>
    {[
      { path: "/", element: Home },
      { path: "/dashboard", element: Dashboard },
      { path: "/product", element: Product },
      { path: "/members", element: Members },
      { path: "/organizations", element: Organizations },
      { path: "/product/:productId", element: ViewProductDetails },
      { path: "/product/edit/:productId", element: EditProductDetails },
    ].map((r, ind) => (
      <Route key={ind} exact path={r.path} element={<r.element />} />
    ))}
  </Route>
);

export default PrivateRoutes;
