import { useCart } from "react-use-cart";

function Cart() {
    const {
      isEmpty,
      totalUniqueItems,
      item,
      updateItemQuantity,
      removeItem,
    } = useCart();
  
    if (isEmpty) return <p>Your cart is empty</p>;
  
    return (
      <>

      
        <h1>Cart ({totalUniqueItems})</h1>
  
        <ul>
          {item.map((item) => (
            <li key={item.id}>
              {item.price} x {item.title} &mdash;
              <button
                onClick={() => updateItemQuantity(item.id, item.price - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateItemQuantity(item.id, item.price + 1)}
              >
                +
              </button>
              <button onClick={() => removeItem(item.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </>
    );
  }

  export default Cart;