import type React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext<{
  user: User | null;
  setUserData: (data: User | null) => void;
}>({
  setUserData: () => {},
  user: null,
});

export type User = {
  id: string;
  name: string;
  token: string;
};

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  function setUserData(data: User | null) {
    setUser(data);
  }

  return (
    <UserContext.Provider value={{ user, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};
