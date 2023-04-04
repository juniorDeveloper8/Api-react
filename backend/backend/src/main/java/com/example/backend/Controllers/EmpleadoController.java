package com.example.backend.Controllers;

import java.util.ArrayList;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Models.EmpleadoModel;
import com.example.backend.Services.EmpleadoService;


@RestController
@RequestMapping(value = "/empleado")
@CrossOrigin("*")
public class EmpleadoController {
  @Autowired
  EmpleadoService empleadoService;

  @GetMapping()
  public ArrayList<EmpleadoModel> obternerEmpleados(){
      return empleadoService.obternerEmpleados();
  }

  @PostMapping()
  public EmpleadoModel guardarEmpleados(@RequestBody EmpleadoModel empleado){
    return this.empleadoService.guardarEmpleados(empleado);
  }

  @GetMapping( path = "/{id}")
  public Optional<EmpleadoModel> obternerEmpleadosPorId(@PathVariable("id") Long id){
    return this.empleadoService.obtenerPorId(id);
  }

  @GetMapping("/query")
  public ArrayList<EmpleadoModel> obtenerTrabajadoresPorNombre(@RequestParam("nombre") String nombre){
    return this.empleadoService.obteberPorNombre(nombre);
  }

  @DeleteMapping( path = "/{id}")
  public String eliminarPorId(@PathVariable("id") Long id){
    boolean ok = this.empleadoService.eliminarEmpleados(id);
    if (ok){
      return "Se elimino correctamente el id"+ id;
        }else{
          return "No se pudo eliminar el id"+ id;
        }
  }
}