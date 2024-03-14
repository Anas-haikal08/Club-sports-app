import React, {FC, Fragment, ReactNode, useEffect, useState} from 'react';
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api';
import './style.less';

type GoogleMapDataProps = {
  children?: ReactNode;
};

const GoogleMapData: FC<GoogleMapDataProps> = ({children}) => {
  const [center, setCenter] = useState({
    lat: -33.447487,
    lng: -70.673676,
  });
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyA6_paEfFUpEiklZB9sDsAUVHOpBen8bmc',
  });
  const [markerPosition, setMarkerPosition] = useState(center);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    setMarkerPosition({
      lat: center.lat,
      lng: center.lng,
    });
  }, [center]);

  return (
    <Fragment>
      {isLoaded ? (
        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName='map-container'
          onClick={() => {}}>
          {<Marker position={markerPosition} />}
        </GoogleMap>
      ) : (
        <div>loading...</div>
      )}
      {children}
    </Fragment>
  );
};

export default GoogleMapData;
