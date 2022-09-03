/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import style from '../../styles/module-css/NewRecipe.module.css';
import InputBox from '../../components/global/InputBox';
import Dropzone from '../../components/global/Dropzone';

function NewRecipe() {
  // eslint-disable-next-line no-unused-vars
  const [image, setImage] = useState([]);

  useEffect(() => { document.title = 'Add Recipe'; }, []);
  return (
    <div className={style.container}>
      <form>
        <Dropzone data={(item) => setImage(item?.image)} />
        <InputBox data={{ name: 'Title', type: 'text', placeholder: 'Title' }} />
        <textarea className="mb-0 mb-md-2 mb-xl-3" name="ingredients" id="ingredients" placeholder="Ingredients" />
        <InputBox data={{ name: 'Videos', type: 'text', placeholder: 'Videos' }} />
        <button type="submit" className="btn btn-lg btn-warning w-100">Add</button>
      </form>
    </div>
  );
}

export default NewRecipe;
