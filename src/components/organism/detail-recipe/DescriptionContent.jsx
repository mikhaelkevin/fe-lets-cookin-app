import React from 'react';
import Image from '../../global/Image';
import { detailRecipeDummy } from '../../../utils/data';
import playButton from '../../../assets/icons/play-icon.svg';

function DescriptionContent() {
  return (
    <>
      <h1>Ingredients</h1>
      {detailRecipeDummy?.ingredients.map((item, index) => {
        const ingredientKey = index + 1;
        return <p key={ingredientKey}>{`- ${item}`}</p>;
      })}
      <h1>Video Step</h1>
      {detailRecipeDummy?.videos?.map((item) => (
        <div
          className="btn btn-warning btn-lg"
          onClick={() => window.open(item)}
          onKeyUp={() => window.open(item)}
          role="button"
          tabIndex={0}
          key={item}
        >
          <Image data={{ image: playButton, title: 'play-icon' }} />
        </div>
      ))}
    </>
  );
}

export default DescriptionContent;
