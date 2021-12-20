import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyOneItem } from "../redux/store";
export default function Product({ name, price, quantity }: Props.Product) {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(products, "products");
  return (
    <div>
      <p>
        {name} {price}$ X{quantity}
      </p>
      <button
        onClick={() => {
          dispatch(buyOneItem({ name, quantity, price }));
          console.log(products, "products");
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
