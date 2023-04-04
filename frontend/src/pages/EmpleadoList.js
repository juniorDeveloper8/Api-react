import React, { useState, } from 'react';
import { Link } from 'react-router-dom';
//import Filtro from '../hooks/Filtro';


const EmpleadoList = ({ empleados, setListUpdated, setFilterData, filterData }) => {

  const handleDelete = id => {
    const requestInit = {
      method: 'DELETE'
    }
    fetch('http://localhost:8080/empleado/' + id, requestInit)
      .then(res => res.text())
      .then(res => console.log(res))

    setListUpdated(true)
  }




  const handleFilter = (id) => {

    const request = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filterData)
    }
    fetch('http://localhost:8080/empleado/' + id, request)
      .then(res => res.json())
      .then(res => console.log(res))

    setFilterData({
      nombre: '',
      apellido: '',
      identificacion: '',
      horaExtra: '',
      sueldo: 0,
      prestamo: 0
    })
  }

  

  return (

    <table className="table table-dark table-hover" >
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Identificacion</th>
          <th>Horas Extras</th>
          <th>Sueldo</th>
          <th>Prestamo</th>
          <th> </th>
        </tr>
      </thead>

      <tbody>
        {empleados.map(empleado => (
          <tr key={empleado.id}>
            <td>{empleado.nombre}</td>
            <td>{empleado.apellido}</td>
            <td>{empleado.identificacion}</td>
            <td>{empleado.horaExtra}</td>
            <td>{empleado.sueldo}</td>
            <td>{empleado.prestamo}</td>
            <td>
              <div className='mb-3'>
                <button onClick={() => handleDelete(empleado.id)} className='btn btn-danger'>Delete</button>
              </div>
              <div className='mb-3'>
                <Link to={`/rol/${[filterData]}`} onClickCapture={(e) => handleFilter(empleado.id)} className='btn btn-primary'>Revisar</Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table >
  )
}

export default EmpleadoList;

/*
 const handleFilter = id => {
    const resquest = {
      method: 'GET'
    }
    fetch('http://localhost:8080/empleado/' + id, resquest)
    .then(res => res.json())
    .then(res => console.log(res))
    return{
      resquest,
    }
  }
*/

/*
const request  = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(filterData)
    }
    fetch('http://localhost:8080/empleado/' + id, request )
      .then(res => res.json())
      .then(res => console.log(res))

    return (
      request 
    )
*/