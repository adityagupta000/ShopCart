import React from 'react';
import { useCart } from 'react-use-cart';

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    removeItem,
    updateItemQuantity,
    emptyCart,
  } = useCart();

  if (isEmpty) return <h2 className="text-center">Your Cart Is Empty</h2>;

  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>Cart ({totalUniqueItems}) total items:({totalItems})</h5>
          <table className="table table-light table-hover m=0">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                    >-</button>
                    <button
                      className="btn btn-danger ms-2"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove Item
                    </button>
                    <button
                      className="btn btn-info ms-2"
                      onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total price: ₹ {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() => emptyCart()}>
            Clear cart
          </button>
          <button className="btn btn-primary m-2">Buy Now</button>
        </div>
      </div>
    </section>
  );
};
export default Cart;