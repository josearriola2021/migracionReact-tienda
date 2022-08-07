import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    //Lo setea desde un inicio
    const userStorage = JSON.parse(localStorage.getItem("userAuth")) || "Iniciar Sesión";
    const [userAuth, setUserAuth] = useState(userStorage);

    function login(values, enterLoading) {
      const validacionEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
      const result = validacionEmail.test(values.email);
      const jsonUsers = require("../json/data.json");
      const users = jsonUsers["users"];
      //Validacion de Inicio de Sesion con los usuarios del json
      const userAdmin = users.filter((user) => {
        return (
          user.email.toLowerCase() == values.email.toLowerCase() &&
          user.password == values.password
        );
      });
      //Recoge el array de los registrados en el localStorage
      const usersLocalStorage = JSON.parse(localStorage.getItem("usuarios"));
      //Encuentra si hay usuarios registrados en el localStorage
      const userRegistrado = usersLocalStorage?.filter((user) => {
        return (
          user.email.toLowerCase() == values.email.toLowerCase() &&
          user.password == values.password
        );
      });
      if (
        (result == true && values.password !== "" && userAdmin != "") ||
        userRegistrado.length > 0
      ) {
        enterLoading(0);
        setTimeout(() => {
          //Guardamos el usuario en el localStorage
          userAdmin != ""
            ? localStorage.setItem(
                "userAuth",
                JSON.stringify(userAdmin[0].nickname)
              )
            : localStorage.setItem(
                "userAuth",
                JSON.stringify(userRegistrado[0].nickname)
              );
          //Seteamos el UserAuth de acuerdo al local storage
          userAdmin != ""
            ? setUserAuth(userAdmin[0].nickname)
            : setUserAuth(userRegistrado[0].nickname);
        }, 4000);
      }
    }

    function logout(){
      localStorage.removeItem("userAuth");
      window.location.href = "/";
      setTimeout(() => {
        setUserAuth("Iniciar Sesión");
      }, 4000)
    }

    return ( <AuthContext.Provider value={{userAuth, setUserAuth, login, logout}}>{children}</AuthContext.Provider> );

};
 