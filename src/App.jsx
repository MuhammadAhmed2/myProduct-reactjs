import React from 'react'
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
  return (
    <>
      <img className='Main-product-image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtYjB0kutsOvPYCvAV1_rwSZT5Sw-rNfAcg&s" />
      <div>
        <h1 className='product-title'>productName</h1>
        <p className='price'>price</p>
        <div className='crousel-selection'>
          <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEtYjB0kutsOvPYCvAV1_rwSZT5Sw-rNfAcg&s" alt="" /></button>
          <button><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQcRfIW5tggAic_wBYqqZstYQzyvi407PIDA&s" alt="" /></button>
          <button><img src="https://www.fourwindsgrowers.com/cdn/shop/files/Pomona-Sweet-Semi-Dwarf-Lemon-Tree_1024x1024.jpg?v=1696267527" alt="" /></button>
        </div>
        <button>Buy Now</button>
      </div>
    </>
  )
}

export default App