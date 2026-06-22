import { createContext, PropsWithChildren, useState } from "react";

type State = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

export const FavoritesContext = createContext<State>({
  ids: [],
  addFavorite: (id: string) => {},
  removeFavorite: (id: string) => {},
});

const FavoriteContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [ids, setIds] = useState<string[]>();

  const addFavorite = (id: string) => {
    setIds((prev) => [id, ...(prev || [])]);
  };

  const removeFavorite = (id: string) =>
    setIds((prev) => prev?.filter((existingId) => existingId != id));

  return (
    <FavoritesContext.Provider
      value={{
        ids: ids || [],
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteContextProvider;
