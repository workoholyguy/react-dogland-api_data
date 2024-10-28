// DogDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const DogDetail = () => {
  const { id } = useParams();
  const [dogDetails, setDogDetails] = useState(null);

  useEffect(() => {
    const fetchDogDetails = async () => {
      const query = `https://api.thedogapi.com/v1/images/${id}?api_key=${ACCESS_KEY}`;
      try {
        const response = await fetch(query);
        const result = await response.json();
        setDogDetails(result);
      } catch (error) {
        console.error("Error fetching dog details:", error);
      }
    };
    fetchDogDetails();
  }, [id]);

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to Gallery</Link>
      {dogDetails ? (
        <div style={{ textAlign: "center" }}>
          <h2>{dogDetails.breeds[0]?.name || "Unknown Breed"}</h2>
          <img src={dogDetails.url} alt="Dog" style={{ width: "50%" }} />
          <p>
            <strong>Weight:</strong>{" "}
            {dogDetails.breeds[0]?.weight.metric || "N/A"}
          </p>
          <p>
            <strong>Life Span:</strong>{" "}
            {dogDetails.breeds[0]?.life_span || "N/A"}
          </p>
          <p>
            <strong>Bred For:</strong> {dogDetails.breeds[0]?.bred_for || "N/A"}
          </p>
          <p>
            <strong>Breed Group:</strong>{" "}
            {dogDetails.breeds[0]?.breed_group || "N/A"}
          </p>
          <p>
            <strong>Temperament:</strong>{" "}
            {dogDetails.breeds[0]?.temperament || "N/A"}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DogDetail;
