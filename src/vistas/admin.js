import {arrayUsers} from "../componentes/adminUsuarios"
import { registre } from "../componentes/registre";

export const admin ={
    template:`
    ${registre.template}
    <table class="table" id="tabla">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nick</th>
          <th>Email</th>
          <th>Borrar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody id="cuerpo">
  
      </tbody>
    </table>
    `,
    script:()=>{

      registre.script()

        let html=``
  
        arrayUsers.forEach(arrayUsers => {
          html+=`    
          <tr>
            <th>${arrayUsers.id}</th>
            <td>${arrayUsers.nick}</td>
            <td>${arrayUsers.email}</td>
            <td><button data-set="${arrayUsers.id}" type="button" class="btn btn-danger eliminar" >Eliminar</button></td>
            <td><button type="button" class="btn btn-info editar">Editar</button></td>
          </tr>
          `
        });
    
        document.querySelector('#cuerpo').innerHTML = html





        const botonesEliminar = document.querySelectorAll(".eliminar");

        botonesEliminar.forEach(botonEliminar => {
          botonEliminar.addEventListener("click", (event) => {
            const userId = event.target.getAttribute('data-set') 
            alert(`Se hizo clic en el botón eliminar en el del usuario con id ${userId}`);

            const fila = botonEliminar.parentNode.parentNode;
            fila.classList.add("fila-oculta");
          });
        });


        const botonesEditar = document.querySelectorAll(".editar");

        botonesEditar.forEach(botonEditar => {
          botonEditar.addEventListener("click", () => {
            alert(`Se hizo clic en el botón editar`);
          });
        });
      }
}