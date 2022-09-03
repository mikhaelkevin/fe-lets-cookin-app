/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import style from '../../styles/module-css/NewRecipe.module.css';

import InputBox from '../../components/global/InputBox';
import Dropzone from '../../components/global/Dropzone';

import { myRecipeDummy } from '../../utils/data';

function EditRecipe() {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => { document.title = 'Edit Recipe'; }, []);

  const data = myRecipeDummy?.filter((item) => item?.id === Number(recipeId));

  return (
    <div className={style.container}>
      <form>
        <Dropzone data={(item) => setImage(item?.image)} />
        <InputBox data={{ name: 'Title', type: 'text', placeholder: data?.[0]?.title }} />
        <textarea className="mb-0 mb-md-2 mb-xl-3" name="ingredients" id="ingredients" placeholder="Ingredients" />
        <InputBox data={{ name: 'Videos', type: 'text', placeholder: 'Videos' }} />
        <button type="submit" className="btn btn-lg btn-warning w-100">Update</button>
      </form>
    </div>
  );
}

export default EditRecipe;
