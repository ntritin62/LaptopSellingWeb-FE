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
    return userCart.data.data;
  }
);

export const addToCart = createAsyncThunk(
  'cart/addToCart',
  async (params, _) => {
    const product = {
      id: params.id,
    };
    try {
      await addToCartService(product);
     
      return params;
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
      state.products = action.payload.cart_items.map(item => item.product);
      state.totalPrice = action.payload.total_price;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      const addProductExists = state.products.find(
        (product) => product.id === action.payload.id
      );

      if (addProductExists) {
        return;
      } else {
        state.products.push({
          ...action.payload,
        });
      }
      // if (action.payload.saleOff > 0) {
      //   state.totalPrice +=
      //     action.payload.price -
      //     action.payload.price * (action.payload.saleOff / 100);
      // } else {
        state.totalPrice += action.payload.price;
      // }
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      const productToRemove = state.products.find(
        (product) => product.id === action.payload.id
      );

      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      // if (state.products[index].saleOff > 0) {
      //   state.totalPrice -=
      //     state.products[index].price -
      //     (state.products[index].price * state.products[index].saleOff) / 100;
      // } else {
        state.totalPrice -= state.products[index].price;
      // }

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
