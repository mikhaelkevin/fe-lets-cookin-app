import React from 'react';
import PropTypes from 'prop-types';
import style from '../../../styles/module-css/LandingPage.module.css';

function SectionTitle({ data }) {
  const { title } = data;

  return (
    <div className={style.sectionTitle}>
      <span>{title}</span>
      <div className={style.titleLine} />
    </div>
  );
}

SectionTitle.propTypes = {
  data: PropTypes.shape({ title: PropTypes.string }),
};

SectionTitle.defaultProps = {
  data: { title: 'Untitled section' },
};

export default SectionTitle;
