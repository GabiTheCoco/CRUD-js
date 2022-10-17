import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const url = new URL(window.location);
const id = url.searchParams.get("id");

const obtenerInfo = async () => {

    if(id === null){
        window.location.href = "/screens/error.html";
    }

    const nombre = document.querySelector("[data-nombre]");
    const email = document.querySelector("[data-email]");

    try{
        const perfil = await clientServices.detalleCliente(id);
        //await espera al sevicio y maneja el then dentro, por lo tanto
        // se puede guardar la info en una constante
    
        if(perfil.nombre && perfil.email){
            nombre.value = perfil.nombre;
            email.value = perfil.email;
        }else{
            throw new Error();
        }



    }catch(error) {
        console.log(error);
        window.location.href = "/screens/error.html";
    }



}

obtenerInfo()

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombreValue = nombre.value;
    const emailValue = email.value;
    
    clientServices.actualizarCliente(nombreValue, emailValue, id).then(() => {
        window.location.href = "/screens/edicion_concluida.html"
    });
    
})