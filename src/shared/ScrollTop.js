import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop({ children }) {
  const location = useLocation();

  useEffect(() => {
    const scroll = window.scrollTo(0, 0);
    return scroll;
  }, [location]);

  return <>{children}</>;
}
