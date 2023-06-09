import React, {useContext} from 'react'
import AppContext from '../context/AppContext';
import OrderItem from '../components/OrderItem'
import arrow from  '../assets/icons/flechita.svg'
import '../style/MyOrder.css'

const MyOrder = () => {


	const {state } = useContext(AppContext);
	
	const sumTotal = () => {
		const reducer = (acumulador, currentValue) => acumulador + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}

  return (
    <aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) =>  (
					<OrderItem 
					indexValue={index}
					product={product} 
					key={`orderitem-${index}`}/>

				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
  );
}

export default MyOrder
