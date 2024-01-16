import React, { useState } from "react";
import "./notablecars.css";
import audi from "../../images/cars/audir8.png";
import bugatti from "../../images/cars/bugatti.png";
import huracan from "../../images/cars/huracan.png";
import mclaren from "../../images/cars/mclaren720s.png";

const NotableCars = () => {
  const [activeSection, setActiveSection] = useState(0);

  const handleButtonClick = (index) => {
    setActiveSection((prevActiveSection) => {
      return prevActiveSection === index ? prevActiveSection : index;
    });
  };

  const items = [
    {
      image: audi,
      caption: 'Audi R8',
      details: 'Details about Audi R8...',
      stats: [
        { label: '0-60 mph', value: '3.5 seconds' },
        { label: 'Engine', value: '5.2L V10' },
        { label: 'Horsepower', value: '532-610' },
        
      ],
    },
    {
      image: bugatti,
      caption: "Bugatti Chiron Sport",
      details: 'Details about Bugatti Chiron Sport...',
      stats: [
        { label: '0-60 mph', value: '3.5 seconds' },
        { label: 'Engine', value: '5.2L V10' },
        { label: 'Horsepower', value: '532-610' },
        
      ],
    },
    {
      image: huracan,
      caption: "Lamborghini Huracan",
      details: 'Details about Lamborghini Huracan...',
      stats: [
        { label: '0-60 mph', value: '2.5 seconds' },
        { label: 'Engine', value: '5.2L V10' },
        { label: 'Horsepower', value: '630' },
        
      ],
    },
    {
      image: mclaren,
      caption: "McLaren 720S",
      details: 'Details about McLaren 720S...',
      stats: [
        { label: '0-60 mph', value: '3.5 seconds' },
        { label: 'Engine', value: '5.2L V10' },
        { label: 'Horsepower', value: '532-610' },
        
      ],
    },
  ];

  return (
    <>
        <div className="heading">
            <h1>Featured Vehicles</h1>
            <h3>A collection of our most valued vehicles.</h3>
        </div>
        <div className="car-container">
            <div className="car-list">
                {items.map((item, index) => (
                <button
                    className={index === activeSection ? "list-btn-active" : "list-btn"}
                    key={index}
                    onClick={() => handleButtonClick(index)}
                >
                    {item.caption}
                </button>
                ))}
                {activeSection !== null && (
                <div>
                <table className="car-table">
                    <tbody>
                    {items[activeSection].stats.map((stat, statIndex) => (
                        <tr key={statIndex}>
                        <td><b>{stat.label}</b></td>
                        <td>{stat.value}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
            )}
            </div>

            {activeSection !== null && (
                <div className="car-details">
                <img className="car-img" src={items[activeSection].image} alt={items[activeSection].caption} />
                </div>
            )}
        </div>
    </>
  );
};

export default NotableCars;
