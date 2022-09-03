/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useParams } from 'react-router-dom';

import style from '../../styles/module-css/NewRecipe.module.css';
import {
  thumbsContainer, thumb, thumbInner, img,
} from '../../styles/dropzone/imagePreview';

import InputBox from '../../components/global/InputBox';

import { myRecipeDummy } from '../../utils/data';

function EditRecipe() {
  const [files, setFiles] = useState([]);
  const { recipeId } = useParams();

  const data = myRecipeDummy?.filter((item) => item?.id === Number(recipeId));

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.svg'],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          alt="preview"
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview); }}
        />
      </div>
    </div>
  ));

  useEffect(
    () => {
      files.forEach((file) => URL.revokeObjectURL(file.preview));
      document.title = 'Add Recipe';
    },
    [],
  );

  return (
    <div className={style.container}>
      <form>
        <div className={style.dropzone}>
          {files?.length ? (
            <aside style={thumbsContainer}>
              {thumbs}
            </aside>
          ) : (
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <span className="text-center">
                Drag and drop, or click to select files and update your recipe picture.
              </span>
            </div>
          )}
        </div>
        <InputBox data={{ name: 'Title', type: 'text', placeholder: data?.[0]?.title }} />
        <textarea className="mb-0 mb-md-2 mb-xl-3" name="ingredients" id="ingredients" placeholder="Ingredients" />
        <InputBox data={{ name: 'Videos', type: 'text', placeholder: 'Videos' }} />
        <button type="submit" className="btn btn-lg btn-warning w-100">Update</button>
      </form>
    </div>
  );
}

export default EditRecipe;
