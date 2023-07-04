import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { axiosCall } from "api/helpers";
import { getAppDetails, getAppDrawerState } from "redux/reducers/utilReducers";

const APP_ID = process.env.REACT_APP_ID || 2;

export const useAppDetails = (productId = "6781") => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getAppDetails(null));

      const getData = async () => {
        const resp = await axiosCall(`/configuration/${APP_ID}/`, {});

        const respD = resp.data;
        dispatch(getAppDetails(respD));
      };
      getData();
    } catch (error) {
      dispatch(getAppDetails(null));
    }
  }, [dispatch, productId]);
};

export const useGetSideDrawerState = () => {
  const dispatch = useDispatch();

  const getCurrentState = (state) => {
    dispatch(getAppDrawerState(state));
  };
  return [getCurrentState];
};
