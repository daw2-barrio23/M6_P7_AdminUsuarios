import {arrayUsers} from "../componentes/adminUsuarios"

export const admin ={
    template:`
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
  
        let html=``
  
        arrayUsers.forEach(arrayUsers => {
          html+=`    
          <tr id="${arrayUsers.id}">
            <th >${arrayUsers.id}</th>
            <td>${arrayUsers.nick}</td>
            <td>${arrayUsers.email}</td>
            <td><button type="button" class="btn btn-danger eliminar" >Eliminar</button></td>
            <td><button type="button" class="btn btn-info editar">Editar</button></td>
          </tr>
          `
        });
    
        document.querySelector('#cuerpo').innerHTML = html





        const botonesEliminar = document.querySelectorAll(".eliminar");

        botonesEliminar.forEach(botonEliminar => {
          botonEliminar.addEventListener("click", () => {
            alert(`Se hizo clic en el botón eliminar`);

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