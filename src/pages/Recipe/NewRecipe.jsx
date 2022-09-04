/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import style from '../../styles/module-css/NewRecipe.module.css';
import InputBox from '../../components/global/InputBox';
import Dropzone from '../../components/global/Dropzone';

function NewRecipe() {
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [videos, setVideos] = useState('');

  useEffect(() => { document.title = `${process.env.REACT_APP_NAME} | Add Recipe`; }, []);

  const dataSend = (event) => {
    event?.preventDefault();
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => dataSend(e)}>
        <Dropzone data={(item) => setImage(item?.image)} />
        <InputBox data={{ name: 'Title', type: 'text', placeholder: 'Title' }} event={(item) => setTitle(item)} />
        <textarea className="mb-0 mb-md-2 mb-xl-3" name="ingredients" id="ingredients" placeholder="Ingredients" onChange={(e) => setIngredients(e?.target?.value)} />
        <InputBox data={{ name: 'Videos', type: 'text', placeholder: 'Videos' }} event={(item) => setVideos(item)} />
        <button type="submit" className="btn btn-lg btn-warning w-100">Add</button>
      </form>
    </div>
  );
}

export default NewRecipe;
