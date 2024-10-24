import React, { useState, useEffect } from "react";
import InfoSection from "./InfoSection"; // Import InfoSection component
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const DogCard = ({ dog, onBreedExtracted }) => {
  const [dogDetails, setDogDetails] = useState(null);

  useEffect(() => {
    const fetchDogDetails = async () => {
      const query = `https://api.thedogapi.com/v1/images/${dog.id}?api_key=${ACCESS_KEY}`;
      try {
        const response = await fetch(query);
        const result = await response.json();
        setDogDetails(result);
      } catch (error) {
        console.error("Error fetching dog details:", error);
      }
    };

    fetchDogDetails();
  }, [dog.id]);

  return (
    <div style={cardStyle}>
      <img src={dog.url} alt="Dog" style={imageStyle} />
      {/* Ensure the onBreedExtracted callback is passed */}
      <InfoSection
        dogDetails={dogDetails}
        onBreedExtracted={onBreedExtracted}
      />
    </div>
  );
};

// Styles for the card
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "10px",
  padding: "10px",
  margin: "10px",
  maxWidth: "300px",
  textAlign: "center",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
};

const imageStyle = {
  width: "100%",
  height: "auto",
  borderRadius: "10px 10px 0 0",
};

export default DogCard;
