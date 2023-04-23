import React, { useContext } from 'react'
import '../style/ProductItem.css'
import AppContext from '../context/AppContext'
import addCart from '../assets/icons/bt_add_to_cart.svg'

const ProductItem = ( {product}) => {
  const {addToCart} = useContext(AppContext);

  const handleClick = item => {
    addToCart(item);
  }

  return (
    <div className="ProductItem">
        <img src={product.images} alt={product.title}/>
        <div className="product-info">
          <div>
            <p>${product.price}</p>
            <p>{product.title}</p>
          </div>
          <figure onClick={() => handleClick(product)}>
            <img src={addCart} alt="" />
          </figure>
       
        </div>
      </div>
  )
}

export default ProductItem
