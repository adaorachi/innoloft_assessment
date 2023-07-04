import Navigation from "./navigation";
import { ToastContainer } from "react-toastify";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Loader } from "components";
import { useAppDetails } from "api";

import "react-toastify/dist/ReactToastify.css";
import "./index.css";

function App() {
  const { appDetails } = useSelector((state) => state.util);

  useAppDetails();

  useEffect(() => {
    const bodyStyles = document.body.style;
    bodyStyles.setProperty("--primary-color", appDetails?.mainColor);
  }, [appDetails]);

  return (
    <div>
      {appDetails ? (
        <Fragment>
          <ToastContainer />
          <Navigation />
        </Fragment>
      ) : (
        <Loader fullPage />
      )}
    </div>
  );
}

export default App;
