import React, { useState } from "react";
import axios from "axios";

const SOSForm = () => {
  const [message, setMessage] = useState("");
  const [watchId, setWatchId] = useState(null);

  const handleStartSOS = () => {
    if ("geolocation" in navigator) {
      const id = navigator.geolocation.watchPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const location = `Latitude: ${latitude}, Longitude: ${longitude}`;

          try {
            const response = await axios.post(
              "http://localhost:3000/send-sos",
              { location }
            );
            setMessage("SOS sent successfully");
            console.log(response.data);
          } catch (error) {
            setMessage("Error sending SOS");
            console.error("Error sending SOS:", error);
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setMessage("Could not get location. Please try again.");
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
      setWatchId(id);
      setMessage("SOS tracking started");
    } else {
      setMessage("Geolocation is not supported by this browser.");
    }
  };

  const handleStopSOS = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
      setMessage("SOS tracking stopped");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Send Emergency SOS
        </h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleStartSOS}
            className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-200"
          >
            Start SOS
          </button>
          <button
            onClick={handleStopSOS}
            className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-200"
          >
            Stop SOS
          </button>
        </div>
        {message && <p className="mt-4 text-center text-red-400">{message}</p>}

        <a
          href="https://smssend.onrender.com/send-sms"
          style={{ display: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hidden Link
        </a>
      </div>
    </div>
  );
};

export default SOSForm;
