
const listaClientes = () => 
    fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());
    // fetch retorna una promesa de por si, por eso se puede utilizar el .then 

// ! abrir http (método, url);

// ? CRUD - metodos http
// * Create - POST
// * Read - GET
// * Update - PUT/PATCH
// * Delete - DELETE


const crearCliente = (nombre, email) => {
  return fetch("http://localhost:3000/perfil", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({nombre, email, id:uuid.v4()})
  });
}


const eliminarCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "DELETE"
  });
}

const detalleCliente = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}`).then((response) => {
    return response.json();
  });
}

const actualizarCliente = (nombre, email, id) => {
  return fetch(`http://localhost:3000/perfil/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nombre, email})
  }).then((response) => response).catch((error => console.log(error)));
}

export const clientServices = {
  listaClientes,
  crearCliente,
  eliminarCliente,
  detalleCliente,
  actualizarCliente
};

