import React from 'react';

export const GifGridItem = ({id,title,url}) => {
    console.log (id,title,url);
  return (
  <div className="nimate__flash card">
      <p>{title}</p>
      <img src={url} alt={title} />
  </div>
  )

};
