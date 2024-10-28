// DogImageGallery.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import WeightChart from "./WeightChart";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const DogImageGallery = () => {
  const [dogImages, setDogImages] = useState([]);
  const [weightDistribution, setWeightDistribution] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      const query = `https://api.thedogapi.com/v1/images/search?has_breeds=1&limit=50&api_key=${ACCESS_KEY}`;
      try {
        const response = await fetch(query);
        const result = await response.json();
        setDogImages(result);
        calculateWeightDistribution(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDogImages();
  }, []);

  const calculateWeightDistribution = (data) => {
    const categories = {
      "0-10 kg": 0,
      "10-20 kg": 0,
      "20-30 kg": 0,
      "30-40 kg": 0,
      "40+ kg": 0,
    };

    data.forEach((dog) => {
      const breed = dog.breeds?.[0];
      if (breed && breed.weight?.metric) {
        const weight = parseFloat(breed.weight.metric.split(" ")[0]);
        if (!isNaN(weight)) {
          if (weight <= 10) categories["0-10 kg"] += 1;
          else if (weight <= 20) categories["10-20 kg"] += 1;
          else if (weight <= 30) categories["20-30 kg"] += 1;
          else if (weight <= 40) categories["30-40 kg"] += 1;
          else categories["40+ kg"] += 1;
        }
      }
    });

    const weightDistributionData = Object.entries(categories).map(
      ([range, count]) => ({ weightRange: range, count })
    );
    setWeightDistribution(weightDistributionData);
  };

  return (
    <div style={galleryStyle}>
      <h1>Dog Adoption Gallery</h1>
      <WeightChart data={weightDistribution} />

      <div style={gridStyle}>
        {dogImages.length > 0 ? (
          dogImages.map((dog) => (
            <Link
              key={dog.id}
              to={`/dog/${dog.id}`}
              style={{ textDecoration: "none" }}
            >
              <DogCard dog={dog} />
            </Link>
          ))
        ) : (
          <p>No dogs found matching the search term.</p>
        )}
      </div>
    </div>
  );
};

const galleryStyle = { padding: "20px", textAlign: "center" };
const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

export default DogImageGallery;
