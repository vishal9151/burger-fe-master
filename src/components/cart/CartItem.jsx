const CartItem = ({ value, title, img, increment, decrement }) => (
    <div className="cartItem">
      <div>
        <h4>{title}</h4>
        <img src={img} alt="Item" />
      </div>
  
      <div>
        <button onClick={decrement}>-</button>
        <p className="input">{value}</p>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );


  export default CartItem;