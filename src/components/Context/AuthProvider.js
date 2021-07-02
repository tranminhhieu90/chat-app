import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { auth } from "../../firebase/config";
import { Spin } from "antd";

export const authContext = React.createContext();
const AuthProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unSubscribed = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email, uid, photoUrl } = user;
        setUser({
          displayName,
          email,
          uid,
          photoUrl,
        });
        setIsLoading(false);
        history.push("/");
      } else {
        setIsLoading(false);
        history.push("/login");
      }
    });

    //clean function
    return () => {
      unSubscribed();
    };
  }, [history]);

  return (
    <authContext.Provider value={user}>
      {isLoading ? <Spin /> : <div>{children}</div>}
    </authContext.Provider>
  );
};

export default AuthProvider;
