import React, { useState } from "react";
import { PiLineVertical } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { FaGreaterThan } from "react-icons/fa6";
import { MdLocalPolice } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { IoRadioButtonOn } from "react-icons/io5";
import { FaDownload } from 'react-icons/fa';
import Map from "../components/Map"
import axios from "axios";

const Admin1 = () => {
  const [selectedState, setSelectedState] = useState("");
  const [message, setMessage] = useState("");
  const [watchId, setWatchId] = useState(null);

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

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
    <>
      <div className="pt-14 relative bg-[#040B11] h-screen w-full">
        <div className="relative h-auto">
          <img
            src="src\pages\Topbg.png"
            alt="tt"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="pl-20 transform -translate-y-1/4">
          <div className="flex justify-left items-start">
            <h1 className="flex text-white text-3xl font-bold -mt-40 pb-8">
              <PiLineVertical className="text-yellow-500 size-12 font-extrabold -mt-2" />
              Locate <h1 className="text-green-600 ml-2">Patrols</h1>
              <h1 className="text-white pl-2">Nearby</h1>
            </h1>

            <div className="absolute top-0 right-0 -mt-40 mr-4 pr-24 ml-35 flex flex-col justify-end pt-2">
              <h1 className="text-gray-400 text-sm">
                Enter location to search*
              </h1>

              <select
                value={selectedState}
                onChange={handleStateChange}
                className="block appearance-none w-full border border-gray-300 text-green-500 py-2 px-1 rounded-lg leading-tight focus:outline-none focus:border-gray-500 bg-transparent pr-32 text-xs"
              >
                <option value="" disabled>
                  Karunamoyee
                </option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
                   {" "}
              </select>
            </div>
          </div>

          <h1 className="text-white pl-8 text-xl -mt-20">
            The city needs us, patrols assemble!
          </h1>
          <h1 className="text-md text-gray-500 pl-8">
            Here's what's happening in the city today.
          </h1>
        </div>

        <div className="flex">
          <div className="pt-4 pl-28 w-[1000px]">
            <Map />
          </div>

          <div className="relative h-auto pl-10">
            <img src=".\public\Police.png" alt="" />
            <h1 className="absolute top-4 left-14 text-white text-2xl flex">
              <IoPersonOutline className="mr-2 mt-1" />
              Police List{" "}
              <FaGreaterThan className="text-gray-500 text-sm ml-24 mt-2" />
            </h1>

            <div className="absolute top-20 left-14 flex flex-col space-y-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <MdLocalPolice className="text-white w-6 h-6 mt-2" />
                  <div className="text-xs">
                    <h1 className="text-white">Insp. Amitav Roy</h1>
                    <h1 className="text-gray-500">Police Id: 234BAK9</h1>
                    <h1 className="text-gray-500">
                      Location: Near Karumanmoyee
                    </h1>
                  </div>
                  <a
                    href="https://smssend.onrender.com/send-sms"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      onClick={handleStartSOS}
                      className="flex items-center space-x-2 p-2 rounded bg-gray-800 hover:bg-gray-700 transition duration-300 ml-4"
                    >
                      <img
                        src="./public/alert.png"
                        alt="Alert"
                        className="w-6 h-6"
                      />
                      <h1 className="text-gray-500 text-xs">PING</h1>
                    </button>
                  </a>

                  <button onClick={handleStopSOS}>
                    <IoRadioButtonOn className="text-gray-400 mt-2" />
                  </button>
                </div>
              ))}
            </div>

            <div>
              <h1 className="absolute top-[calc(65%+10px)] left-14 text-white text-2xl flex">
                <IoMdNotifications className="text-white mr-2 mt-2" />
                Notifications
                <FaGreaterThan className="text-gray-500 text-sm ml-24 mt-2" />
              </h1>
              <div className="absolute top-[calc(75%+10px)] left-14 flex flex-col space-y-4">
                {[1, 2].map((_, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <img src="./public/alert1.png" alt="" />
                    <div className="text-xs">
                      <h1 className="text-white">New Alert</h1>
                      <h1 className="text-gray-500">
                        a pick pocket report near ka...
                      </h1>
                      <h1 className="text-gray-500">July 26, 2024</h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div></div>

        <div />
      </div>
    </>
  );
};

export default Admin1;
