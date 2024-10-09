import React from 'react'
import { useState } from 'react';
import './App.css'; 

const arr = [
  {
    productName: 'Mangos',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtYjB0kutsOvPYCvAV1_rwSZT5Sw-rNfAcg&s',
    price: 550,
  },
  {
    productName: 'Apple',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcRfIW5tggAic_wBYqqZstYQzyvi407PIDA&s',
    price: 600,
  },
  {
    productName: 'Lemons',
    imgUrl: 'https://www.fourwindsgrowers.com/cdn/shop/files/Pomona-Sweet-Semi-Dwarf-Lemon-Tree_1024x1024.jpg?v=1696267527',
    price: 200,
  }
]







const App = () => {
  
  const [Name, setName] = useState('mango')
  const [Price, setPrice] = useState('mango')
  const [Img, setImg] = useState('mango')

  function update(index) {
    console.log(index);

  setName(arr[index].productName)
  setPrice(arr[index].price)
  setImg(arr[index].imgUrl)
  }

  
  return (
    <>
      <img className='Main-product-image' src={Img}/>
      <div>
        <h1 className='product-title'>{Name}</h1>
        <p className='price'>{Price}</p>
        <div  className='crousel-selection' >
        {arr.map((items, index)=>{
          return <div key={index}>
                  <button><img onClick={() => update(index)} src={items.imgUrl}/></button>
                 </div>
        })}
        </div>
        <button>Buy Now</button>
      </div>  
    </>    
  )
}  

export default App