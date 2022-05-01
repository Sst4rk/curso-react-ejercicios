import SelectList from './SelectList';
import React, { useState } from 'react';
const SelectsAnidados = () => {
    const [state, setState] = useState('');
    const [town, setTown] = useState('');
    const [suburb, setSuburb] = useState('');

    /* 
    
     *https://api.copomex.com/query/get_municipio_por_estado/${state}?token=pruebas 
     *token 48a60466-c607-4399-bab1-2215a9fd89dc
     
    */
    const TOKEN = '48a60466-c607-4399-bab1-2215a9fd89dc';
    return (
        <div>
            <h2>Selects Anidados</h2>
            <SelectList
                title="estado"
                url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}
                handleChange={(e) => {
                    setState(e.target.value);
                }}
            />
            {state && (
                <SelectList
                    title="municipios"
                    url={`https://api.copomex.com/query/get_municipio_por_estado/${state}?token=${TOKEN}`}
                    handleChange={(e) => {
                        setTown(e.target.value);
                    }}
                />
            )}

            {town && (
                <SelectList
                    title="colonia"
                    url={`https://api.copomex.com/query/get_colonia_por_municipio/${town}?token=${TOKEN}`}
                    handleChange={(e) => {
                        setSuburb(e.target.value);
                    }}
                />
            )}

            <p>Opciones Seleccionadas</p>
            <pre>
                <code>
                    {state} - {town} - {suburb}
                </code>
            </pre>
        </div>
    );
};

export default SelectsAnidados;
