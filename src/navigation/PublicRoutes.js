import { Route } from "react-router-dom";

const PublicRoutes = (
  <Route>
    {[].map((r, ind) => (
      <Route key={ind} exact path={r.path} element={<r.element />} />
    ))}
  </Route>
);

export default PublicRoutes;
