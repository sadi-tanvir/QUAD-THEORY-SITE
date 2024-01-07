import { createReducer, createAction } from '@reduxjs/toolkit';

interface ProductsType {
    Id: string;
    Name: string;
    Price: number;
    ImageUrl: string;
    IsPopular: boolean;
    IsRecommended: boolean;
}
export interface AuthReducerStateType {
    products?: ProductsType[];
};

const initialState = {
    products: []
} as AuthReducerStateType;


const storeProduct = createAction('storeProduct');

const productReducer = createReducer(initialState, (builder) => {
    builder.addCase(storeProduct, (state, action) => {
        state.products = action.payload
    });
});

export default productReducer;