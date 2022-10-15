import { ActionTypes } from "../constents/action-types";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
};

export const selectedProducts = (product) => {
    return {
        type: ActionTypes.SETECTED_PRODUCT,
        payload: product
    }
};