import React, { useState, useEffect } from "react";
import DogCard from "./DogCard"; // Import the DogCard component
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const DogImageGallery = () => {
  const [dogImages, setDogImages] = useState([]); // List of dog images with breed info
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [filteredResults, setFilteredResults] = useState([]); // State for filtered results
  const [breedsMap, setBreedsMap] = useState({}); // Map of dog ID to breed name

  useEffect(() => {
    const fetchDogImages = async () => {
      const query = `https://api.thedogapi.com/v1/images/search?has_breeds=1&limit=20&api_key=${ACCESS_KEY}`;
      try {
        const response = await fetch(query);
        const result = await response.json();
        setDogImages(result); // Storing result in state
        setFilteredResults(result); // Initialize filtered results with all dogs
        console.log(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDogImages();
  }, []);

  // Handle breed name extracted from InfoSection and store it in breedsMap
  const handleBreedExtracted = (dogId, breedName) => {
    setBreedsMap((prevBreedsMap) => ({
      ...prevBreedsMap,
      [dogId]: breedName,
    }));
  };

  // Search function to filter results by breed name
  const searchDogs = (searchValue) => {
    setSearchTerm(searchValue);
    if (searchValue !== "") {
      // Filter dogImages by the breed name stored in breedsMap
      const filteredData = dogImages.filter((dog) =>
        breedsMap[dog.id]?.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(dogImages); // Reset to show all dogs
    }
  };

  return (
    <div style={galleryStyle}>
      <h1>Dog Adoption Gallery</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by breed name"
        value={searchTerm}
        onChange={(e) => searchDogs(e.target.value)} // Call search function
        style={searchBarStyle}
      />

      <div style={gridStyle}>
        {filteredResults.length > 0 ? (
          filteredResults.map((dog) => (
            <DogCard
              key={dog.id}
              dog={dog}
              onBreedExtracted={(breedName) =>
                handleBreedExtracted(dog.id, breedName)
              }
            /> // Pass callback to DogCard
          ))
        ) : (
          <p>No dogs found matching the search term.</p>
        )}
      </div>
    </div>
  );
};

// Styling for the gallery and grid layout
const galleryStyle = {
  padding: "20px",
  textAlign: "center",
};

const gridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

// Style for the search bar
const searchBarStyle = {
  padding: "10px",
  width: "300px",
  marginBottom: "20px",
  fontSize: "16px",
};

export default DogImageGallery;
