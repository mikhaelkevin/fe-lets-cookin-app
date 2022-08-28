import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/LandingPage.module.css';

function SectionTitle({ data }) {
  return (
    <div className={style.sectionTitle}>
      <span>{data}</span>
      <div className={style.titleLine} />
    </div>
  );
}

SectionTitle.propTypes = {
  data: PropTypes.string,
};

SectionTitle.defaultProps = {
  data: 'Untitled section',
};

export default SectionTitle;
