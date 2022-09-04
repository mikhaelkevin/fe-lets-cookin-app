import React, { useState } from 'react';
import { RiDeleteBin2Line, RiEdit2Line } from 'react-icons/ri';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import style from '../../../styles/module-css/Profile.module.css';
import Image from '../../global/Image';
import brokenImage from '../../../assets/images/broken-image.png';
import DelRecipeModal from './DelRecipeModal';

function MyRecipeCard({ data: { id, title, image } }) {
  const navigate = useNavigate();
  const [isDelete, setIsDelete] = useState(false);

  return (
    <>

      <div className="col-lg-3 col-md-6 col-12 mb-4">
        <div className={style.featureItemCard}>
          <div className="card h-100 w-100 bg-transparent border-0">
            <div className="row position-absolute p-2 w-100 h-100">
              <div className="col-8">
                <span>{title}</span>
              </div>
              <div className="col-4 d-flex justify-content-end">
                <div className="row">
                  <div className="col-6">
                    <button type="button" className="btn btn btn-warning" onClick={() => navigate(`/edit-recipe/${id}`)}>
                      <RiEdit2Line />
                    </button>
                  </div>
                  <div className="col-6">
                    <button type="button" className="btn btn btn-danger" onClick={() => setIsDelete(true)}>
                      <RiDeleteBin2Line />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <Image data={{ image, title }} />
          </div>
        </div>
      </div>
      <DelRecipeModal show={isDelete} closeModal={() => setIsDelete(false)} />
    </>
  );
}

MyRecipeCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.string,
  }),
};

MyRecipeCard.defaultProps = {
  data: {
    id: 1,
    title: 'Untitled',
    image: brokenImage,
  },
};

export default MyRecipeCard;
