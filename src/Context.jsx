import { useContext, useReducer, useEffect, createContext } from "react";
import reducer from "./reducer";
import cartItems from "./data";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  LOADING,
  DISPLAY_ITEMS,
  DECREASE,
} from "./actions";
import { getTotals } from "./utils";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: new Map(cartItems.map((item) => [item.id, item])),
};
console.log(`initState = ${initialState.cart}`);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalAmount, totalCost } = getTotals(state.cart);
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    console.log(id);
    dispatch({ type: REMOVE, payload: { id } });
  };
  const increase = (id) => {
    console.log(id);
    dispatch({ type: INCREASE, payload: { id } });
  };
  const decrease = (id) => {
    console.log(id);
    dispatch({ type: DECREASE, payload: { id } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increase,
        decrease,
        totalAmount,
        totalCost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
