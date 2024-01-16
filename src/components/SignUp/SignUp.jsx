import React, { useState, useEffect } from "react";
import "./signup.css";

const SignUp = () => {
  const [makes, setMakes] = useState([]);
  const [models, setModels] = useState([]);
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMake, setSelectedMake] = useState("");
  const currentYear = new Date().getFullYear();

  const fetchMakes = async (year) => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?year=${year}&format=json`
      );
      const data = await response.json();

      const makeOptions = [
        { value: "", displayName: "Select Vehicle Make:", key: "make-default" }, // Unique key for the default option
        ...data.Results.map((make) => ({
          value: make.MakeID,
          displayName: make.MakeName,
          key: `make-${make.MakeId}`, // Unique key for each make
        })),
      ];
      setMakes(makeOptions);
    } catch (error) {
      console.error("Error fetching makes:", error);
    }
  };

  const fetchModels = async (year, make) => {
    try {
      const response = await fetch(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?year=${year}&format=json`
      );
      const data = await response.json();

      const modelOptions = [
        {
          value: "",
          displayName: "Select Vehicle Model:",
          key: "model-default",
        }, // Unique key for the default option
        ...data.Results.map((model) => ({
          value: model.Model_ID,
          displayName: model.Model_Name,
          key: `model-${model.Model_ID}`, // Unique key for each model
        })),
      ];
      setModels(modelOptions);
    } catch (error) {
      console.error("Error fetching models:", error);
    }
  };

  useEffect(() => {
    if (selectedYear) {
      fetchMakes(selectedYear);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (selectedYear && selectedMake) {
      fetchModels(selectedYear, selectedMake);
    }
  }, [selectedYear, selectedMake]);

  const locations = [
    { value: "", displayName: "Select Show Location:" },
    { value: "bethesda", displayName: "Bethesda" },
    { value: "anapolis", displayName: "Annapolis" },
    { value: "baltimore", displayName: "Baltimore" },
  ];

  return (
    <>
      <div className="container">
        <div className="signup-container" id="signup">
          <h2>Register Your Vehicle</h2>
          <div className="form-elements">
            <div className="form-element">
              <label>Full Name<span className="require">*</span>:</label>
              <input required type="text" placeholder="Name" />
            </div>
            <div className="form-element">
              <label>Vehicle Year<span className="require">*</span>:</label>
              <select
                value={selectedYear}
                onChange={(e) => {
                  setSelectedYear(e.target.value);
                  setMakes([]);
                  setModels([]);
                }}
              >
                <option value="">Select Vehicle Year:</option>
                {Array.from({ length: 40 }, (_, index) => (
                  <option key={index} value={currentYear - index}>
                    {currentYear - index}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label>Vehicle Make<span className="require">*</span>:</label>
              <select
                value={selectedMake}
                onChange={(e) => {
                  setSelectedMake(e.target.value);
                  setModels([]);
                }}
              >
                {makes.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.displayName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label>Vehicle Model<span className="require">*</span>:</label>
              <select>
                {models.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.displayName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label>Show Location<span className="require">*</span>:</label>
              <select>
                {locations.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.displayName}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-element">
              <label>Show Date:</label>
              <input required type="date" placeholder="Name" />
            </div>
            <div className="form-element">
              <button className="signup-btn">Apply Vehicle</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
