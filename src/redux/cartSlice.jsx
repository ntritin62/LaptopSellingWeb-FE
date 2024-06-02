import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getCart from '../services/cartService';

import {
  addToCartService,
  deleteItemInCartService,
} from '../services/cartService';

export const getUserCart = createAsyncThunk(
  'cart/getUserCart',
  async (params, thunkAPI) => {
    const userCart = await getCart();

    return userCart.data.cart[0];
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (params, _) => {
    const product = {
      _id: params._id,
    };
    try {
      await addToCartService(product);
      return {
        product: params._id,
        name: params.name,
        imageUrl: params.imageUrl,
        price: params.price,
      };
    } catch (e) {
      console.log(e);
    }
  }
);

export const removeFromCart = createAsyncThunk(
  'cart/removeFromCart',
  async (params, _) => {
    await deleteItemInCartService(params);
    return params;
  }
);

// export const incrementInCart = createAsyncThunk(
//   '/cart/incrementInCart',
//   async (params, _) => {
//     await incrementInCartService(params);
//     return params;
//   }
// );

// export const decrementInCart = createAsyncThunk(
//   '/cart/decrementInCart',
//   async (params, _) => {
//     await decrementInCartService(params);
//     return params;
//   }
// );

const initialState = {
  products: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: (state, action) => {
      state.products = [];
      state.totalPrice = 0;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.products = action.payload.cartItems;
      state.totalPrice = action.payload.subtotal;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.product === action.payload.product
      );

      if (addProductExists) {
        return;
      } else {
        state.products.push({
          ...action.payload,
        });
      }
      state.totalPrice += action.payload.price;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.product === action.payload
      );

      const index = state.products.findIndex(
        (product) => product.product === action.payload
      );
      state.totalPrice -= state.products[index].price;

      if (state.totalPrice < 0) {
        state.totalPrice = 0;
      }
      state.products.splice(index, 1);
    });
    // builder.addCase(incrementInCart.fulfilled, (state, action) => {
    //   const productToIncrease = state.products.find(
    //     (product) => product._id === action.payload
    //   );

    //   productToIncrease.quantity++;
    //   const index = state.products.findIndex(
    //     (product) => product._id === action.payload
    //   );
    //   state.totalPrice +=
    //     state.products[index].price -
    //     (state.products[index].sale / 100) * state.products[index].price;
    // });
    // builder.addCase(decrementInCart.fulfilled, (state, action) => {
    //   const productToRemove = state.products.find(
    //     (product) => product._id === action.payload
    //   );
    //   state.productsNumber = state.productsNumber - 1;
    //   if (productToRemove.quantity === 1) {
    //     const index = state.products.findIndex(
    //       (product) => product._id === action.payload
    //     );
    //     state.totalPrice -=
    //       (state.products[index].price -
    //         (state.products[index].sale / 100) * state.products[index].price) *
    //       parseInt(state.products[index].quantity);

    //     state.products.splice(index, 1);
    //   } else {
    //     productToRemove.quantity--;

    //     const index = state.products.findIndex(
    //       (product) => product._id === action.payload
    //     );
    //     state.totalPrice -=
    //       state.products[index].price -
    //       (state.products[index].sale / 100) * state.products[index].price;
    //   }
    // });
  },
});

export const { resetCart, setAddress } = cartSlice.actions;
export default cartSlice.reducer;
