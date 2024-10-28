import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DogCard from "./DogCard";
import WeightChart from "./WeightChart";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const DogImageGallery = () => {
  const [dogImages, setDogImages] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [breedWeights, setBreedWeights] = useState([]);

  useEffect(() => {
    const fetchDogImages = async () => {
      const query = `https://api.thedogapi.com/v1/images/search?has_breeds=1&limit=50&api_key=${ACCESS_KEY}`;
      try {
        const response = await fetch(query);
        const result = await response.json();
        setDogImages(result);
        setFilteredResults(result);
        calculateAverageWeights(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDogImages();
  }, []);

  const calculateAverageWeights = (data) => {
    const groupWeights = {};
    data.forEach((dog) => {
      const breed = dog.breeds?.[0];
      if (breed && breed.breed_group && breed.weight?.metric) {
        const weightValues = breed.weight.metric.split(" - ");
        const minWeight = parseFloat(weightValues[0]);
        const maxWeight = parseFloat(weightValues[1]);
        const averageWeight = (minWeight + maxWeight) / 2;

        if (!isNaN(averageWeight)) {
          if (!groupWeights[breed.breed_group]) {
            groupWeights[breed.breed_group] = { totalWeight: 0, count: 0 };
          }
          groupWeights[breed.breed_group].totalWeight += averageWeight;
          groupWeights[breed.breed_group].count += 1;
        }
      }
    });

    const breedWeightsData = Object.entries(groupWeights).map(
      ([group, { totalWeight, count }]) => ({
        breedGroup: group,
        averageWeight: (totalWeight / count).toFixed(2),
      })
    );
    setBreedWeights(breedWeightsData);
  };

  return (
    <div style={galleryStyle}>
      <h1>Dog Adoption Gallery</h1>
      <WeightChart data={breedWeights} />
      <div style={gridStyle}>
        {filteredResults.length > 0 ? (
          filteredResults.map((dog) => (
            <Link key={dog.id} to={`/dog/${dog.id}`}>
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
