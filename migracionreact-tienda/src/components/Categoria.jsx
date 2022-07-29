import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

const { Panel } = Collapse;
const seleccionCategoria = [];

const Categoria = ({setEstadoCategoria, setActiveBuscador}) => {

    const [data, setData] = useState({});

    useEffect(() => {
        const fetchApi = async () => {
            try {
                const response = await fetch("https://josearriola2021.github.io/dataJson/data.json");
                const data = await response.json();
                setData(data); 
            } catch (error) {
                console.log(error);
            }
        }

        fetchApi();
    })

    let i = 1;

    const deleteCategoria = (value) => {
        const buscarCategoria = seleccionCategoria.findIndex((categoria) => categoria == value);
        seleccionCategoria.splice(buscarCategoria,1);
        seleccionCategoria.length > 0 ? 
        setEstadoCategoria(seleccionCategoria)
        :
        setActiveBuscador(true) //Si seleccionCategoria es cero, es decir ya no existe seleccion se renderizan todos los productos
    }

    const addCategoria = (value) => {
        seleccionCategoria.push(value);
        setEstadoCategoria(seleccionCategoria);
        console.log(seleccionCategoria);
    }

    const onChange = (e) => {
      setActiveBuscador(false); //Para renderizar en Tienda.js lo seleccionado en categorias
      e.target.checked
        ? addCategoria(e.target.name)
        : deleteCategoria(e.target.name);
    };

    return (
      <div className="md:block hidden lg:pl-12 sm:pl-3 pl-4">
        <Collapse accordion ghost>
          {data.categorias?.map((element) => {
            const { nombre } = element;
            i += 1;
            return (
              <Panel header={nombre} key={i}>
                {element.subcategorias?.map((subcategoria) => {
                  return (
                    <div className="flex flex-col">
                      <Checkbox onChange={onChange} name={subcategoria}>
                        {subcategoria}
                      </Checkbox>
                    </div>
                  );
                })}
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
}
 
export default Categoria;