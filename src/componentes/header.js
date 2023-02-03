import { router } from "./router";

export const header = {
    template: `
       <nav>
        <ul>
            <li id="home">Home</li>
            <li id="admin">Admin</li>
            <li id="about">About</li>
        </ul>
       </nav> 
    `,
    script: ()=>{
        console.log('Hola soy el header')
        document.querySelector('#home').addEventListener('click', ()=>{
            console.log('click en home')
            router.home()
        });
        document.querySelector('#admin').addEventListener('click', ()=>{
            console.log('click en admin')
            router.admin()
        });
        document.querySelector('#about').addEventListener('click', ()=>{
            console.log('click en about')
            router.about()
        });
    }
}