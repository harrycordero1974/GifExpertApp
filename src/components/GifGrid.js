import React, { useEffect, useState } from 'react';
// import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hoooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);



    //  useEffect(() => {
    //    getGifs(category)
    //     .then(setImages);
    // },[category])

// getGifs();


  return (
     <>
     <h3>{category}</h3>  
       <div className='card-grid'>
          {loading && <p> Cargando </p> }
      
          {
              images.map(img =>(
                <GifGridItem 
                key = {img.id}
                {...img} />
              ))
          }
      

       </div>
     </>
       
  )};
