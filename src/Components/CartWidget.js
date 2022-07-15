import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CartWidget() {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon="fa-regular fa-treasure-chest" />
      <div className="qty-display">5</div>
    </div>
  );
}
  
  export default CartWidget;