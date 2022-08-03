import React, { useEffect, useState} from 'react';
import { Collapse } from 'antd';
import { Checkbox } from 'antd';
const CheckboxGroup = Checkbox.Group;
const { Panel } = Collapse;

const Categoria = ({setEstadoCategoria, setActiveBuscador, setCheckedList, checkedList}) => {

  const [data, setData] = useState({}); 

    useEffect(() => {
      const fetchApi = async () => {
        try {
          const response = await fetch(
            "https://josearriola2021.github.io/dataJson/data.json"
          );
          const data = await response.json();
          setData(data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchApi();
    });

    const onChange = (e) => {
      setCheckedList(e); //Permite checkear el valor seleccionado
      setActiveBuscador(false); //Para renderizar en Tienda.js lo seleccionado en categorias
      setEstadoCategoria(e); //Asigna a estado categoria la lista de checkbox seleccionados, y por ende filtrar en Tienda.jsx
      e.length == 0
        ? setActiveBuscador(true)
        : console.log("Existen categorias seleccionadas");
    };

    let i = 1; //Para darle un key al Panel

    return (
      <div className="md:block hidden lg:pl-12 sm:pl-3 pl-4">
        <Collapse accordion ghost>
          {data.categorias?.map((element) => {
            const { nombre } = element;
            i += 1;
            return (
              <Panel header={nombre} key={i}>
                <div className="flex flex-col">
                  <CheckboxGroup
                    options={element["subcategorias"]}
                    value={checkedList}
                    onChange={onChange}
                    style={{ display: "flex", flexDirection: "column" }}
                  />
                </div>
              </Panel>
            );
          })}
        </Collapse>
      </div>
    );
}
 
export default Categoria;