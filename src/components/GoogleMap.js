import React from "react";
import { SimpleIcon } from "components";
import GoogleMapReact from "google-map-react";

const APIKEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

const LocationPin = ({ text }) => (
  <div className="pin">
    <SimpleIcon name="FaMapMarkerAlt" size={30} />
    <p className="pin-text">{text}</p>
  </div>
);

export default function GoogleMap({ addressDetails }) {
  const { address, lat, lng } = addressDetails || {};

  const defaultProps = {
    center: {
      lat,
      lng,
      address,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: "300px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: APIKEY, language: "en" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <LocationPin
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text={defaultProps.center.address}
        />
      </GoogleMapReact>
    </div>
  );
}
