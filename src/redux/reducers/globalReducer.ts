import { createReducer, createAction } from '@reduxjs/toolkit';


export interface AuthReducerStateType {
    isAuthenticate?: boolean;
};

const initialState = {
    isAuthenticate: false
} as AuthReducerStateType;


const loginUser = createAction('loginUser');

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(loginUser, (state, action) => {
        state.isAuthenticate = true
    });

    // // Default case reducer
    // builder.addDefaultCase((state, action) => {
    //     // Do nothing
    // });
});

export default authReducer;