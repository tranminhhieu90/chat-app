import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../firebase/config";
import { Spin } from "antd";

export const AuthContext = React.createContext();
export default function AuthProvider({ children }) {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoURL } = user;
        setUser({
          displayName,
          email,
          uid,
          photoURL,
        });
        setIsLoading(false);
        history.push("/");
        return;
      }
      setUser({});
      setIsLoading(false);
      history.push("/login");
    });

    //clean function
    return () => {
      unSubscribed();
    };
  }, [history]);
  return (
    <AuthContext.Provider value={{ user }}>
      {isLoading ? <Spin /> : children}
    </AuthContext.Provider>
  );
}
