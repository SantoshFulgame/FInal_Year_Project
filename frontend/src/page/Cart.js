import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif";
import { toast } from "react-hot-toast";
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector(state => state.user);
  const navigate = useNavigate();

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total, 10),
    0
  );

  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const handlePayment = async () => {
    // Payment handling logic
  };
  
  return (
    <div className="flex justify-center items-center h-full">
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ?
          <div className="my-4 flex flex-col md:flex-row gap-3">
            {/* display cart items  */}
            <div className="w-full max-w-md">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    qty={el.qty}
                    total={el.total}
                    price={el.price}
                  />
                );
              })}
            </div>

            {/* total cart item  */}
            <div className="w-full max-w-md">
              <div className="bg-gray-100 rounded-lg p-4">
                <h2 className="bg-blue-500 text-white p-2 text-lg rounded-t-lg">Summary</h2>

                {user.email ? (
                  <>
                    <div className="flex py-2 text-lg border-b">
                      <p>Name: </p>
                      <p className="ml-auto w-60 font-bold">{user.firstName} {user.lastName}</p>
                    </div>
                    <div className="flex py-2 text-lg border-b">
                      <p>Email:</p>
                      <p className="ml-auto font-bold w-60 overflow-hidden whitespace-nowrap overflow-ellipsis">{user.email}</p>
                    </div>
                    <div className="flex py-2 text-lg border-b">
                      <p>Address: </p>
                      <p className="ml-auto w-60 font-bold">
                        {(user.addressLine1 || user.addressLine2) ? `${user.addressLine1} ${user.addressLine2} ,${user.city}-${user.pincode} ,${user.state}` : <span className="text-red-500">Address not provided</span>}
                      </p>
                    </div>
                  </>
                ) : null}
                <div className="flex py-2 text-lg border-b">
                  <p>Total Qty :</p>
                  <p className="ml-auto w-60 font-bold">{totalQty}</p>
                </div>
                <div className="flex py-2 text-lg border-b">
                  <p>Amount to pay :</p>
                  <p className="ml-auto w-60 font-bold">
                    <span className="text-red-500">₹</span> {totalPrice}
                  </p>
                </div>
              </div>
              <button className="bg-red-500 w-full text-lg font-bold py-2 text-white mt-4 rounded-lg" onClick={handlePayment}>
                Payment
              </button>
            </div>
          </div>

          :
          <div className="flex justify-center items-center flex-col">
            <img src={emptyCartImage} alt="Empty cart" className="w-full max-w-sm" />
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Cart;
