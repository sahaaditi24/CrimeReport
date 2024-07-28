import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { FaDownload } from 'react-icons/fa';


const containerStyle = {
  width: "100%",
  height: "500px",
};

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [waterATMData, setWaterATMData] = useState([]);
  const [wasteBinData, setWasteBinData] = useState([]);

  useEffect(() => {
    // Get the user's current location
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(userPosition);
          fetchNearbyLocations(userPosition);
        },
        (error) => {
          console.error("Error getting current position:", error);
        }
      );
    } else {
      console.error("Geolocation not available.");
    }
  }, []);

  const fetchNearbyLocations = (location) => {
  
    const nearbyWaterATMs = [
      {
        lat: location.lat + 0.001,
        lng: location.lng + 0.002,
        name: "Active place 1",
      },
      {
        lat: location.lat - 0.002,
        lng: location.lng - 0.001,
        name: "Active place 2",
      },
    ];

    const nearbyWasteBins = [
      {
        lat: location.lat + 0.002,
        lng: location.lng - 0.002,
        name: "Active place 1",
      },
      {
        lat: location.lat - 0.001,
        lng: location.lng + 0.001,
        name: "Active place 2",
      },
    ];

    setWaterATMData(nearbyWaterATMs);
    setWasteBinData(nearbyWasteBins);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nearby Locations</h1>
      </header>
      <div className="map-container">
        <LoadScript googleMapsApiKey="AIzaSyDnveBGIHGiJf7TuEdIncwCE1YyKBc0XM0">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition}
            zoom={14}
          >
            {currentPosition && (
              <Marker position={currentPosition} title="Your Location" />
            )}

            {waterATMData.map((marker, index) => (
              <Marker
                key={index}
                position={marker}
                title={marker.name}
                icon={{
                  url: {FaDownload}, // Replace with the URL of your marker icon
                  scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
                }}
              />
            ))}

            {wasteBinData.map((marker, index) => (
              <Marker
                key={index}
                position={marker}
                title={marker.name}
                icon={{
                  url: {FaDownload}, // Replace with the URL of your marker icon
                  scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
                }}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;