import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const AppGifExpert = () => {
    //const categories = ['One Puncj','Samuray X','Astro Boy'];
  const [categories, setCategories] = useState(['']);
//   const handlAdd = () =>
//   {
//         //setCategories([...categories, 'MegaMan']);
//         setCategories(catg => [...categories,'MegaMan'] );
//   }
        

  return (<>
    <h1> Gif Expert App </h1>
    <AddCategory setCategories = {setCategories}/>
    <br></br>
    <ol>
        {
            categories.map ( category => (
                // return <li key={category}> {category}     </li>
                <GifGrid
                key={category}  
                category={category}/>
            
            
            ))
        }
    </ol>
    {/* <button onClick={handlAdd} > Add </button> */}
  </>
  );
};


export default AppGifExpert;