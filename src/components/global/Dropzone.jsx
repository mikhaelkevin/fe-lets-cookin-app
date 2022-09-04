/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

import {
  thumbsContainer, thumb, thumbInner, img,
} from '../../styles/dropzone/imagePreview';

function Dropzone({ data }) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.svg'],
    },
    onDrop: (acceptedFiles) => {
      const fileObject = acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      }));

      setFiles(fileObject);
      data({ image: fileObject });
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

  useEffect(() => files.forEach((file) => URL.revokeObjectURL(file.preview)), []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {files?.length ? (
        <aside style={thumbsContainer}>
          {thumbs}
        </aside>
      ) : (
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <span className="text-center">
            Drag and drop, or click here to select files and set your picture.
          </span>
        </div>
      )}
    </>
  );
}

Dropzone.propTypes = {
  data: PropTypes.func,
};

Dropzone.defaultProps = {
  data: () => {},
};

export default Dropzone;
