import React from 'react';
import { detailRecipeDummy } from '../../../utils/data';
import Image from '../../global/Image';

function HeadContent() {
  const a = 2;

  return (
    <div className="card">
      <div className="card-header">
        <p>{detailRecipeDummy?.title}</p>
      </div>
      <div className="position-absolute bottom-0 end-0 mb-3 me-md-2 me-3 ">
        <button type="submit" className={`btn mx-2 bg-light ${a === 1 ? null : 'active'}`}>Like</button>
        <button type="submit" className="btn btn-light mx-2">Save</button>
      </div>
      <Image data={{ image: detailRecipeDummy?.image, title: detailRecipeDummy?.title }} />
    </div>
  );
}

export default HeadContent;
