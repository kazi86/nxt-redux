'use client'

import { combineReducers, createStore } from "redux";

const initialCakeState = { numOfCakes: 10 };
const initialIceCreamState = { numOfIceCreams: 10 };

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const cakeReducer = (state = initialCakeState, action: any) => {
    switch (action.type) {
        case BUY_CAKE:
            return { ...state, numOfCakes: state.numOfCakes - 1 };
        default:
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action: any) => {
    switch (action.type) {
        case BUY_ICECREAM:
            return { ...state, numOfIceCreams: state.numOfIceCreams - 1 };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

export const store = createStore(rootReducer);

// Also export actions if needed:
export const buyCake = () => ({ type: BUY_CAKE });
export const buyIceCream = () => ({ type: BUY_ICECREAM });
