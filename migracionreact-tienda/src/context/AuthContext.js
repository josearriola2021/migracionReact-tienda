import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const userStorage = JSON.parse(localStorage.getItem("userAuth")) || "Iniciar Sesión";
    const [userAuth, setUserAuth] = useState(userStorage);

    // const validacionIniciarSesion = () => {
    //     const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    //     const inputEmailIniciarSesion = document.querySelector(
    //       "#inputEmailIniciarSesion"
    //     ).value;
    //     const result = validacionEmail.test(inputEmailIniciarSesion);
    //     const inputPasswordIniciarSesion = document.querySelector(
    //       "#inputPasswordIniciarSesion"
    //     ).value;
    //     const jsonUsers = require("../json/data.json");
    //     const users = jsonUsers["users"];
    //     //Validacion de Inicio de Sesion con los usuarios del json
    //     const validacionUsuario = users.filter((user) => {
    //       return (
    //         user.email.toLowerCase() == inputEmailIniciarSesion.toLowerCase() &&
    //         user.password.toLowerCase() == inputPasswordIniciarSesion.toLowerCase()
    //       );
    //     });
    //     const usersLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
    //     const validacionLocalStorage = usersLocalStorage?.filter((user) => {
    //       return (
    //         user.email.toLowerCase() == inputEmailIniciarSesion.toLowerCase() &&
    //         user.password.toLowerCase() == inputPasswordIniciarSesion.toLowerCase()
    //       );
    //     });
    //     if (
    //       (result == true &&
    //         inputPasswordIniciarSesion !== "" &&
    //         validacionUsuario != "") ||
    //         validacionLocalStorage != ""
    //     ) {
    //       enterLoading(0);
    //       setTimeout(() => {
    //         //Guardamos el usuario y seteamos el usuario Autenticado
    //         validacionUsuario !== "" ? localStorage.setItem("userAuth", JSON.stringify(validacionUsuario[0].nickname)) : localStorage.setItem("userAuth", JSON.stringify(validacionLocalStorage[0].nickname));
    //         validacionUsuario !== "" ? setUserAuth(validacionUsuario[0].nickname) : setUserAuth(validacionLocalStorage[0].nickname);
    //       }, 4000);
    //     }
    //   };

    // const logout = () => {
    //     localStorage.removeItem("userAuth");
    // }

    return ( <AuthContext.Provider value={{userAuth, setUserAuth}}>{children}</AuthContext.Provider> );

}
 
export default AuthProvider;