import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom";

// const Planthora_API = "http://localhost:3333/posts";

const PostYourPlant = () => {

    const [freeChecked, setFreeChecked] = useState(false);
    const [swapChecked, setSwapChecked] = useState(false);
    const [wantedChecked, setWantedChecked] = useState(false);

    const handleCategoryChange = (e) =>{
        const { name } = e.target;

        if (name === 'free'){
            setFreeChecked(true)
        }else if (name === 'swap'){
            setSwapChecked(true)
        }else if (name === 'wanted'){
            setWantedChecked(true)
        }
    };
    useEffect(() => {
        if (freeChecked || swapChecked){
            setWantedChecked(false)
        }
    }, [freeChecked, swapChecked]);
    useEffect(() => {
        if (wantedChecked){
            setFreeChecked(false)
            setSwapChecked(false)
        }
    }, [wantedChecked]);


    return (
        <div className="noHomeContainer">
    <div className="userForms">
    <h1>Post Your Plant</h1>
      <form action="">
        <div className="field">
          <label>Title of your post:</label>
          <input type="text" name="username" required />
        </div>
        <div className="field">
          <label>Name of the plant:</label>
          <input type="text" name="password" required />
        </div>
        <div className="field">
          <label>Description:</label>
          <textarea name="message"></textarea>
        </div>
        
        
        <div className="field">
            <div className="tradeCategory">
                <label className='checkboxes'>
                    <input type="checkbox" name="free" checked={freeChecked} onChange={handleCategoryChange} />
                    Free
                </label>
                <label className='checkboxes'>
                    <input type="checkbox" name="swap" checked={swapChecked} onChange={handleCategoryChange} />
                    Swap
                </label>
                <label className='checkboxes'>
                    <input type="checkbox" name="wanted" checked={wantedChecked} onChange={handleCategoryChange} />
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
}

export default PostYourPlant;