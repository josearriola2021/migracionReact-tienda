import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const userStorage = JSON.parse(localStorage.getItem("userAuth")) || "Iniciar Sesión";
    const [userAuth, setUserAuth] = useState(userStorage);

    return ( <AuthContext.Provider value={{userAuth, setUserAuth}}>{children}</AuthContext.Provider> );

}
 
export default AuthProvider;