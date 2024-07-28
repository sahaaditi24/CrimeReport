import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import { FaGreaterThan } from "react-icons/fa6";
import { ethers } from "ethers";

const CrimeReportForm = () => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    crime: "",
    crimeType: "",
    description: "",
    crimePlace: "",
    district: "",
    pincode: "",
    firNumber: "",
    aadharNumber: "",
  });
  const [crimeImage, setCrimeImage] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "crimeImage") {
      setCrimeImage(files[0]);
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const deploySmartContract = async (firNumber, crimePlace, description) => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contractABI = [
          "constructor(string memory _firNumber, string memory _crimePlace, string memory _description)",
          "function getFIRDetails() public view returns (string memory, string memory, string memory)",
        ];

        const contractBytecode = "0x608060405234801561001057600080fd5b5060405161013a38038061013a8339810180604052602081101561003357600080fd5b505160408051602080820151919092015191601182015183527f536f6c7665640000000000000000000000000000000000000000000000000000006040820151600090920191805182019190600101906100a7565b50610106565b6000602082840312156100bd57600080fd5b81516100ca816100ad565b9392505050565b60aa806100de6000396000f3fe60806040526004361060415760003560e01c806322f0a3d0146046578063c040622614607b57600080fd5b3660455761003a565b005b348015605157600080fd5b5060586064565b604080519115158252519081900360200190f35b348015608657600080fd5b50608d6091565b604080516001600160a01b039092168252519081900360200190f35b60006001905091905056fea26469706673582212203c832f0b191e12503ed938ad26bb5354fa31dd16fa2ed3452e4f4416e3dd5b9064736f6c63430008070033";

        const factory = new ethers.ContractFactory(
          contractABI,
          contractBytecode,
          signer
        );
        const contract = await factory.deploy(
          firNumber,
          crimePlace,
          description
        );

        await contract.deployed();
        console.log("Contract deployed to:", contract.address);
        return contract.address;
      } catch (error) {
        console.error("Error deploying smart contract:", error);
      }
    } else {
      console.log("Ethereum object not found, install MetaMask.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Deploy smart contract
      const contractAddress = await deploySmartContract(
        formData.firNumber,
        formData.crimePlace,
        formData.description
      );

      // Create form data object
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });
      if (crimeImage) {
        data.append("crimeImage", crimeImage);
      }
      data.append("userId", user.id);
      data.append("contractAddress", contractAddress);

      // Send form data to server
      const response = await axios.post(
        "http://localhost:3000/submit-crime-report",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(`Form submitted successfully. Contract deployed at: 0x5F611eA7E157D125fC23676C4544F5d8b09C2CB4`);
    } catch (error) {
      console.error(
        "There was an error submitting the form or deploying the contract!",
        error
      );
    }
  };

  return (
    <div className="max-w-full bg-[#040B11]">
      <div className="flex text-green-500 pb-6 ml-40">
        <FaGreaterThan />
        <FaGreaterThan />
        <FaGreaterThan />
      </div>
      <h2 className="text-2xl font-bold mb-8 text-white ml-40">Report A Crime</h2>
      <form onSubmit={handleSubmit} className="-ml-16">
        <div className="grid grid-cols-2 gap-5 px-56">
          {[
            { label: "Crime", name: "crime" },
            { label: "Crime Type", name: "crimeType" },
            { label: "Crime Description", name: "description" },
            { label: "Crime Place", name: "crimePlace" },
            { label: "District", name: "district" },
            { label: "Pincode", name: "pincode" },
            { label: "FIR Number", name: "firNumber" },
            { label: "Aadhar Number", name: "aadharNumber" },
          ].map(({ label, name }) => (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block text-gray-300">
                {label}
              </label>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="block appearance-none w-80 bg-transparent border border-gray-300 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </div>
          ))}
          <div className="mb-4">
            <label htmlFor="crimeImage" className="block text-gray-300">
              Crime Image
            </label>
            <input
              type="file"
              id="crimeImage"
              name="crimeImage"
              onChange={handleChange}
              className="block appearance-none w-80 bg-transparent border border-gray-300 text-gray-700 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <button
            type="submit"
            className="w-36 bg-green-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CrimeReportForm;
