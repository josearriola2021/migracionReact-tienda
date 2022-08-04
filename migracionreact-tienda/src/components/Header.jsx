import React, { useState } from 'react';
import IniciarSesion from './IniciarSesion';
import Registrarse from './Registrarse';
import { Input } from 'antd';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../json/data.json";
import "../css/Header.css";
// import { PoweroffOutlined } from '@ant-design/icons'; //Para loading

const Header = ({setEstadoBuscador, setActiveBuscador, setCheckedList }) => {
  //Estado inicial de modal: Iniciar Sesion
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [usuarioInicioSesion, setUsuarioInicioSesion] = useState("Inicia Sesion");

  //Estado inicial de modal: Registrarse
  const [isModalVisibleRegistrarse, setIsModalVisibleRegistrarse] =
    useState(false);

  //Eventos para abrir login
  const showModal = () => {
    setIsModalVisible(true);
  };

  //buscador
  const { Search } = Input;
  const onSearch = (value) => {
    setActiveBuscador(true); //Para que se renderice en Tienda.js lo seleccionado en el buscador
    setEstadoBuscador(value); //Asigna a estadoBuscador el valor asignado en el input
    setCheckedList([]); //Limpia los checkbox cuando uso el buscador
  }; 

  //limpia el buscador cuando no existe ninguna entrada
  const onClear = (e) => {
    e.target.value === "" ? setEstadoBuscador(e.target.value) : console.log("");
  };

  return (
    <>
      <header className="sticky top-0 z-10">
        <div className="navbar bg-base-100">
          <div className="md:block hidden" style={{ flex: "3" }}>
            <a className="btn btn-ghost normal-case text-xl">Tienda Virtual</a>
          </div>
          <div className="md:flex-none justify-end gap-2" style={{ flex: "6" }}>
            <div className="form-control w-full">
              <Search
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
                onChange={onClear}
              />
            </div>
            <div className="dropdown dropdown-end" id="inicioSesionHeader">
              <label
                tabindex="0"
                className="btn btn-ghost btn-circle avatar w-40 gap-4 px-3"
                onClick={showModal}
              >
                <figure>
                  <i className="bi bi-person text-3xl"></i>
                </figure>
                <p className="capitalize" id="inicioSesionHeaderUsuario">
                  {usuarioInicioSesion}
                </p>
              </label>
              <ul
                tabindex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black hidden"
                id="inicioSesionHeaderItems"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle">
                <figure className="indicator">
                  <i className="bi bi-cart text-3xl"></i>
                  <span
                    className="badge badge-sm indicator-item"
                    id="indicadorItem"
                  >
                    0
                  </span>
                </figure>
              </label>
              <div
                tabindex="0"
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span
                    className="font-bold text-lg text-black"
                    id="cantidadProductosSpan"
                  >
                    0 productos
                  </span>
                  <span className="text-info" id="totalPrecioSpan">
                    Total: S/0
                  </span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block" id="viewCart">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Registrarse
        isModalVisibleRegistrarse={isModalVisibleRegistrarse}
        setIsModalVisibleRegistrarse={setIsModalVisibleRegistrarse}
      />
      <IniciarSesion
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        setIsModalVisibleRegistrarse={setIsModalVisibleRegistrarse}
        setUsuarioInicioSesion={setUsuarioInicioSesion}
      />
    </>
  );
}
 
export default Header;