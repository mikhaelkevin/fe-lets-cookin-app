/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import style from '../../styles/module-css/NewRecipe.module.css';

import InputBox from '../../components/global/InputBox';
import Dropzone from '../../components/global/Dropzone';

import { myRecipeDummy } from '../../utils/data';

function EditRecipe() {
  const { recipeId } = useParams();

  const [image, setImage] = useState([]);
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [videos, setVideos] = useState('');

  const dataFetcher = () => {
    const data = myRecipeDummy?.filter((item) => item?.id === Number(recipeId))?.[0];
    setTitle(data.title);
  };

  useEffect(() => {
    document.title = 'Edit Recipe';
    dataFetcher();
  }, []);

  const dataSend = (event) => {
    event?.preventDefault();
  };

  return (
    <div className={style.container}>
      <form onSubmit={(e) => dataSend(e)}>
        <Dropzone data={(item) => setImage(item?.image)} />
        <InputBox
          data={{
            name: 'Title', type: 'text', placeholder: 'Title', value: title,
          }}
          event={(item) => setTitle(item)}
        />
        <textarea className="mb-0 mb-md-2 mb-xl-3" name="ingredients" id="ingredients" placeholder="Ingredients" onChange={(e) => setIngredients(e?.target?.value)} />
        <InputBox data={{ name: 'Videos', type: 'text', placeholder: 'Videos' }} event={(item) => setVideos(item)} />
        <button type="submit" className="btn btn-lg btn-warning w-100">Update</button>
      </form>
    </div>
  );
}

export default EditRecipe;
