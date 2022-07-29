import { Collapse } from 'antd';
import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';

const { Panel } = Collapse;

const Categoria = ({setEstadoCategoria, setActiveCategoria, setActiveBuscador}) => {

    const filtroProductos = []

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

    const onChange = (e) => {
        setActiveCategoria(true); //Para que se renderice en Tienda.js lo seleccionado en la categoria
        setActiveBuscador(false); 
        e.target.checked ? setEstadoCategoria(e.target.name)
        :
        console.log("No se seleccionó");
    };

    return (
        <div className='md:block hidden lg:pl-12 sm:pl-3 pl-4'>
            <Collapse accordion ghost>
                {
                    data.categorias?.map((element) => {
                        const {nombre} = element;
                        i +=1 ;
                        return(
                            <Panel header={nombre} key={i}>
                                {
                                    element.subcategorias?.map((subcategoria) => {
                                        return(
                                            <div className='flex flex-col'>
                                                <Checkbox onChange={onChange} name={subcategoria}>{subcategoria}</Checkbox>
                                            </div>
                                        )
                                    })
                                }
                            </Panel>
                        )
                    })
                }
            
            </Collapse>
        </div>
      );
}
 
export default Categoria;