import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

const useUser = () => useContext(ToastContext);

const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [encodedToken, setEncodedToken] = useState(null);

  function loginUser({ email, password }) {
    try {
        const userData = await axios.post("/api/auth/login", {
          email: email,
          password: password,
        });
      } catch (error) {

      }

  }

  return (
    <UserContext.Provider value={{ encodedToken, firstName, lastName, loginUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, useUser };
