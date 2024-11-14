import { useState, createContext, useContext } from "react";

const StateContext = createContext({
  toogleSidebar: false,
  setToogleSidebar: () => {},
  favourite: [],
  setFavourite: () => {},
  searchQuery: "",
  setSearchQuery: () => {},
  searchMobileQuery: "",
  setSearchMobileQuery: () => {},
});

export const ContextProvider = ({ children }) => {
  const [toogleSidebar, setToogleSidebar] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchMobileQuery, setSearchMobileQuery] = useState("");
  const [favourite, setFavourite] = useState([])
  return (
    <StateContext.Provider value={{ toogleSidebar, setToogleSidebar, favourite, setFavourite, searchQuery, setSearchQuery, searchMobileQuery, setSearchMobileQuery}}>
      {children}
    </StateContext.Provider>
  );
};

export const useGlobalState = () => useContext(StateContext);
