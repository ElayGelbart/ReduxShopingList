import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";
export const shopInitState: { products: Props.Product[] } = {
  products: [
    { name: "Iphone", price: 100, quantity: 5 },
    { name: "MacBook", price: 300, quantity: 4 },
    { name: "Apple Watch", price: 500, quantity: 10 },
    { name: "Iphone 5", price: 746, quantity: 15 },
  ],
};

export const buyOneItem = createAction<Props.Product>("decrement");

export const dataOfShopReducer = createReducer(shopInitState, (builder) => {
  builder.addCase(buyOneItem, (state, action) => {
    const productIndex = state.products.findIndex(
      (product) => product.name === action.payload.name
    );
    console.log(state.products[productIndex].quantity);
    state.products[productIndex].quantity--;
    console.log(state.products[productIndex].quantity);
  });
});
export const store = configureStore({ reducer: dataOfShopReducer });
