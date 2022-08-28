import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import style from '../../../../styles/module-css/LandingPage.module.css';

function RightPage({ data: { id, title } }) {
  const navigate = useNavigate();

  return (
    <div className={style.rightSide}>
      <div className={style.content}>
        <span>{title}</span>
        <hr />
        <button type="submit" className="btn btn-lg btn-warning" onClick={() => navigate(`/recipe/${id}`)}>
          See more
        </button>
      </div>
    </div>
  );
}

RightPage.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }),
};

RightPage.defaultProps = {
  data: {
    id: 1,
    title: 'Untitled',
  },
};

export default RightPage;
