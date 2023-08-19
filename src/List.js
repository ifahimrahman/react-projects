import React from 'react';

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, occupation, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p><em>Profession:</em> {occupation}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
