import React, {createContext, useReducer, useContext} from 'react';

/* Action Types */
const SET_PREMIUM = 'SET_PREMIUM';

const GlobalStateContext = createContext();

const initialState = {
  premium: false
}

const globalStateReducer = (state, action) => {
  switch(action.type) {
    case SET_PREMIUM:
      return {
        ...state,
        premium: action.payload,
      };

    default:
      return state;
  }
}

/* Export a component to provide the context to its children. This is used in our _app.js file */

export const GlobalStateProvider = ({children}) => {
  const [state, dispatch] = useReducer(globalStateReducer, initialState);

  return (
    <GlobalStateContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalStateContext.Provider>
  )
};

/* 
Default export is a hook that provides a simple API for updating the global state. 
This also allows us to keep all of this state logic in this one file
*/

const useGlobalState = () => {
  const [state, dispatch] = useContext(GlobalStateContext);

  const setPremium = (bool) => {
    dispatch({
      type: SET_PREMIUM,
      payload: bool
    });
  };

  return {
    setPremium,
    premium: state.premium,
  }
}

export default useGlobalState;