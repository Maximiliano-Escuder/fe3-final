import { createContext, useReducer, useMemo } from "react";
export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext(undefined);

const reducerFunction = (state, { type, dentistsData, dentistFav }) => {
  switch (type) {
    case "dark":
      return {
        ...state,
        theme: "light"
      }
    case "light":
      return {
        ...state,
        theme: "dark"
      }
    case "GetAllDentists":
      return {
        ...state,
        data: dentistsData
      }
      case "AddToFavs":
        localStorage.setItem(dentistFav.id, JSON.stringify(dentistFav))
      return {
        ...state
      }
      case "deleteFromFavs":
        localStorage.removeItem(dentistFav.id)
      return {
        ...state
      }
    default:
      return state;
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  const store = useMemo(() => ({
    state,
    dispatch,
    }), [state]);

  return (
    <ContextGlobal.Provider value={store}>
      {children}
    </ContextGlobal.Provider>
  );
};
