import { Link } from 'react-router-dom';
import React from 'react'

const Rol = ({ filteerData }) => {
  
//TABLA ROL DE L EMPLEADO POR FILA

  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Identificacion</th>
            <th>Seguro</th>
            <th>Sueldo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{filteerData?.nombre ?? "..."}</td>
            <td>{filteerData?.apellido ?? "..."}</td>
            <td>{filteerData?.identificacion ?? "..."}</td>
          </tr>
        </tbody>
      </table>

      <div>
        <Link to="/" className="btn btn-dark" >Inicio</Link>
        <Link to="./../list" className="btn btn-dark" >Lista de Empleados</Link>
      </div>
    </div>

  )
}

export default Rol;

/*const filterData = () => {
    
    seg = 0;
    result=0;
    pre=0;
    neto=0;
    if (filterData === ("true")) {
     
      seg = {sueldo} * 0.0935;
      result = {sueldo} - seg;
      pre = {sueldo} - {prestamo};
      neto = pre;
    }
  }
*/