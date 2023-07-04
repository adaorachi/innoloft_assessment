import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import { Navbar, PageContainer, ScrollTop, SideDrawer } from "../shared";
import { Error } from "../pages";

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollTop>
      <Navbar />
      <SideDrawer />
      <PageContainer>
        <>
          <Routes>
            {PrivateRoutes}
            {PublicRoutes}
            <Route path="*" element={<Error />} />
          </Routes>
        </>
      </PageContainer>
    </ScrollTop>
  </BrowserRouter>
);

export default AppRoutes;
