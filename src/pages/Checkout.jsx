import React from 'react'
import '../style/Checkout.css'
import OrderItem from '../components/OrderItem'

const Checkout = () => {
  return (
    <div className="Checkout">
    <div className="Checkout-container">
      <h1 className="title">My orders</h1>

      <div className="Checkout-content">
        <div className="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
            </div>
           <OrderItem/>
        </div>
        </div>
</div>
  )
}

export default Checkout
