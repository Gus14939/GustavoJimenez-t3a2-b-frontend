import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostYourPlant = () => {
  const API_KEY = process.env.REACT_APP_PERENUAL_API_KEY;
  const PlanthoraBkEnd = process.env.REACT_APP_BKND_ROOT
  const PlanthoraURL = `${PlanthoraBkEnd}/posts/postYourPlant`;

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    plantName: '',
    plantInfo:{
      id: '',
    },
    description: '',
    category: {
      free: false,
      swap: false,
      wanted: false,
    },
  });

  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox') {
      setFormData({
        ...formData,
        category: {
          ...formData.category,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    if (name === "plantName" && value.length > 1) {
      fetchPlantSuggestions(value);
    }
  };

  const fetchPlantSuggestions = async (query) => {
    try {
      const response = await fetch(`https://perenual.com/api/species-list?key=${API_KEY}&q=${query}`);
      const data = await response.json();
      setSearchResults(data.data);
    } catch (error) {
      console.error("Failed to fetch plant suggestions:", error);
    }
  };

  const handleSearchResultClick = (commonName, plantId) => {
    setFormData({
      ...formData,
      plantName: commonName,
      plantInfo: {
        ...formData.plantInfo,
        id: plantId,
      },
    });
    console.log(commonName, plantId)

    // Optionally clear the search results after selection
    setSearchResults([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(PlanthoraURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to post plant');
      }

      const data = await response.json();
      const postId = data.data._id;

      navigate(`/posts/postDetails/${postId}`);
    } catch (error) {
      console.error('Posting failed:', error);
    }
  };

  return (
    <div className="noHomeContainer">
      <div className="userForms">
        <h1>Post Your Plant</h1>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label>Title of your post:</label>
            <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
          </div>
          <div className="field">
            <label>Name of the plant:</label>
            <input
              type="text"
              name="plantName"
              value={formData.plantName}
              onChange={handleInputChange}
              required
            />
            {searchResults.length > 0 && (
              <div className='searchResultContainer'>
                {searchResults.map((result, index) => (
                  <div
                    className='searchResult'
                    onClick={() => handleSearchResultClick(result.common_name, result.id)}
                    key={index}
                  >
                    <div className='sr_common_name'>{result.common_name} {result.id}</div>
                    <div className='sr_scient_name'><b>Scientific Name:</b> <i>{result.scientific_name[0]}</i></div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="field">
            <label>Description:</label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} required></textarea>
          </div>
          <div className="field">
            <div className="tradeCategory">
              <label className="checkboxes">
                <input type="checkbox" name="free" checked={formData.category.free} onChange={handleInputChange} />
                Free
              </label>
              <label className="checkboxes">
                <input type="checkbox" name="swap" checked={formData.category.swap} onChange={handleInputChange} />
                Swap
              </label>
              <label className="checkboxes">
                <input type="checkbox" name="wanted" checked={formData.category.wanted} onChange={handleInputChange} />
                Wanted
              </label>
            </div>
          </div>
          <div className="formButton">
            <button type="submit">Post it!</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostYourPlant;
