import React from 'react';

const Project = ({ name, description, img }) => {
  return (
    <article className='card'>
      <div className='card__container-img'>
        <img src={{ img }} alt='' className='card__img' />
      </div>
      <h3 className='card__title'>{name}</h3>
      <p className='card__description'>{description}</p>
    </article>
  );
};

export default Project;
