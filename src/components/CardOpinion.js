import React from 'react';

const CardOpinion = ({ name, description, img }) => {
  return (
    <div className='card-opinion'>
      <div className='card-opnion__container-img'>
        <img src={{ img }} alt='' class='card-opinion__img' />
      </div>
      <div className='card-opinon__content'>
        <p className='card-opinion__text'>{description}</p>
        <p className='card-opinion__name'>{name}</p>
      </div>
    </div>
  );
};

export default CardOpinion;
