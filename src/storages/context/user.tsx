import type React from "react";
import { createContext, useState } from "react";

export const UserContext = createContext<{
  user: User | null;
  setUser: (data: User | null) => void;
}>({
  setUser: () => {},
  user: null,
});

export type User = {
  id: string;
  name: string;
  token: string;
  userType?: "MENTEE" | "MENTOR";
};

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
