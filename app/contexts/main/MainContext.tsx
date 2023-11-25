"use client";

import { Dispatch, createContext, useContext, useReducer } from "react";

interface MainContext {
  loggedInUser: string;
}

export type MainDispatch = Dispatch<{
  type: string;
  user: string;
}>;

const mainReducer = (main: MainContext, action: { type: string; user: string }) => {
  switch (action.type) {
    case "logIn": {
      return {
        ...main,
        loggedInUser: action.user,
      };
    }
    case "logOut": {
      return {
        ...main,
        loggedInUser: "",
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
};

const initialMain: MainContext = {
  loggedInUser: "",
};

export const MainContext = createContext<MainContext>(initialMain);
export const MainDispatchContext = createContext<MainDispatch | null>(null);

export const useMain = () => useContext(MainContext);
export const useMainDispatch = () => useContext(MainDispatchContext);

export function MainProvider({ children }) {
  const [main, dispatch] = useReducer(mainReducer, initialMain);

  return (
    <MainContext.Provider value={main}>
      <MainDispatchContext.Provider value={dispatch}>{children}</MainDispatchContext.Provider>
    </MainContext.Provider>
  );
}
