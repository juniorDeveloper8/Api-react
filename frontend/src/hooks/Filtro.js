import React, { Fragment, useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import Rol from "../pages/Rol";

//accionde toma de datos

export const Filtro = () => {

  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const getFilterData = () => {
      fetch('http://localhost:8080/empleado')
        .then(res => res.json())
        .then(res => setFilterData(res))
    }
    getFilterData()
    
  }, [])



  return (
    <Fragment>
      <Navbar brand='Empleado' />
      <div className='container'>
        <div className='row'>
          <div className='col-7'>
            <h2 style={{ textAlign: 'center' }}>Lista de Empleados</h2>
            <Rol filterData={filterData} setFilterData={setFilterData} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Filtro;

/*
const useFiltro = id => {
  const [filterData, setFilterData] = useState(null);
  function fetchFilterData () {
    fetch('http://localhost:8080/empleado/' + id, filterData)
    .then((respose) => respose.json())
    .then((data) => {
      setFilterData(data(0));
    });
  }

  useEffect(() => {
    fetchFilterData();
  }, []);
}
*/