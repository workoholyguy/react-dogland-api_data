import React, { useEffect, useState } from "react";

const InfoSection = ({ dogDetails, onBreedExtracted }) => {
  const [hasExtracted, setHasExtracted] = useState(false); // Track if breed has been extracted

  useEffect(() => {
    // If dogDetails are available and contain breed info, pass breed name up to the parent
    if (
      dogDetails &&
      dogDetails.breeds &&
      dogDetails.breeds.length > 0 &&
      !hasExtracted &&
      onBreedExtracted // Check if onBreedExtracted is provided
    ) {
      onBreedExtracted(dogDetails.breeds[0].name);
      setHasExtracted(true); // Mark that the breed has been extracted
    }
  }, [dogDetails, onBreedExtracted, hasExtracted]);

  return (
    <div>
      {dogDetails ? (
        <div style={infoStyle}>
          <h3>{dogDetails.breeds[0]?.name || "Unknown breed"}</h3>
          <p>
            <strong>Weight:</strong>{" "}
            {dogDetails.breeds[0]?.weight.metric || "Unknown"} kg
          </p>
          <p>
            <strong>Life Span:</strong>{" "}
            {dogDetails.breeds[0]?.life_span || "Unknown"}
          </p>
          <p>
            <strong>Bred For:</strong>{" "}
            {dogDetails.breeds[0]?.bred_for || "Unknown"}
          </p>
          <p>
            <strong>Group:</strong>{" "}
            {dogDetails.breeds[0]?.breed_group || "Unknown"}
          </p>
          <p>
            <strong>Temperament:</strong>{" "}
            {dogDetails.breeds[0]?.temperament || "Unknown"}
          </p>
        </div>
      ) : (
        <p>Loading details...</p>
      )}
    </div>
  );
};

// Styling for the info section
const infoStyle = {
  padding: "10px",
  borderTop: "1px solid #ccc",
  marginTop: "10px",
};

export default InfoSection;
