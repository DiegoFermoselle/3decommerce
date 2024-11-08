import { useState } from "react";

const FetchingData = () => {
  //acceder a la promesa con un fetching de datos -> el fetching siempre devuelve una promesa, lo que tengo q hacer es manejarlos
  //1ero creo el estado

  const [arrayUsuarios, setArrayUsuarios] = useState([]);
  const getUsers = fetch("https://jsonplaceholder.org/users");
  //si o si tengo que utilizar doble .then por el formato
  getUsers
    .then((res) => res.json())
    .then((usuarios) => {
      setArrayUsuarios(usuarios);
    })
    .catch((error) => {
      console.log(error);
    });
  // por una cuestion de alcance de variables, la paso a estados

  console.log(arrayUsuarios);

  return (
    <div>
      <h2>Aca los usuarios</h2>
    </div>
  );
};

export default FetchingData;
