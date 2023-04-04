package com.example.backend.Models;

import javax.persistence.*;

@Entity
@Table(name = "empleado")

public class EmpleadoModel {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  private long id;
  
  private String nombre;
  private String apellido;
  private String identificacion;
  private String sueldo;
  private String prestamo;
  private String horaExtra;

  
  public EmpleadoModel() {
  }
  
  public long getId() {
    return id;
  }
  public void setId(long id) {
    this.id = id;
  }
  public String getNombre() {
    return nombre;
  }
  public void setNombre(String nombre) {
    this.nombre = nombre;
  }
  public String getApellido() {
    return apellido;
  }
  public void setApellido(String apellido) {
    this.apellido = apellido;
  }
  public String getIdentificacion() {
    return identificacion;
  }
  public void setIdentificacion(String identificacion) {
    this.identificacion = identificacion;
  }
  public String getSueldo() {
    return sueldo;
  }
  public void setSueldo(String sueldo) {
    this.sueldo = sueldo;
  }
  public String getPrestamo() {
    return prestamo;
  }
  public void setPrestamo(String prestamo) {
    this.prestamo = prestamo;
  }
  public String getHoraExtra() {
    return horaExtra;
  }
  public void setHoraExtra(String horaExtra) {
    this.horaExtra = horaExtra;
  }

}
