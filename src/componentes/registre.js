import multiavatar from '@multiavatar/multiavatar/esm'

export const registre = {
    template:`
    <form id="registro-formulario">
        <label >Nombre de usuario:</label>
        <input @input="generateAvatar" type="text" id="nombre-usuario" name="nombre-usuario" required><br><br>
        <label for="correo-electronico">Correo electrónico:</label>
        <input type="email" id="correo-electronico" name="correo-electronico" required><br><br>
        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required><br><br>
        <button type="submit">Registrarse</button>
    </form>
    <div class="col-2" id="avatar"></div>
    `,

    script: ()=>{
        const registroFormulario = document.getElementById("registro-formulario");
    registroFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombreUsuario = document.getElementById("nombre-usuario").value;
    const correoElectronico = document.getElementById("correo-electronico").value;
    const contrasena = document.getElementById("contrasena").value;
    console.log(`Nombre de usuario: ${nombreUsuario}`);
    console.log(`Correo electrónico: ${correoElectronico}`);
    console.log(`Contraseña: ${contrasena}`);
    
    registroFormulario.reset();
  });

  document.querySelector('#nombre-usuario').addEventListener("keydown", (event)=>{

    let svgCode = multiavatar(event.target.value)
    document.querySelector('#avatar').innerHTML = svgCode;
  })

    }
}