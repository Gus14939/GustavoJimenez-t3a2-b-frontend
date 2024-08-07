import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostYourPlant = () => {
  const [formData, setFormData] = useState({
    title: '',
    plantName: '',
    description: '',
    category: {
      free: false,
      swap: false,
      wanted: false,
    },
  });

  const navigate = useNavigate();

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
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3333/posts/postYourPlant', {
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
      console.log('Posting your plant was successful:', data);

      // Assuming the response from backend includes an 'id' for the newly created post
      const postId = data.data._id; // Adjust this based on your actual response structure

      console.log("is redirecting: " + postId)

      // Redirect to view the newly created post
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
            <input type="text" name="plantName" value={formData.plantName} onChange={handleInputChange} required />
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