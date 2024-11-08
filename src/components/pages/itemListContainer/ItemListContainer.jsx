import { Card } from "../../common/Card/Card";
import { products } from "../../../productos";
// let task = new Promise((res, rej) => {
//   let num = 1;
//   if (num === 1) {
//     res("es uno");
//   } else {
//     rej("No es 1");
//   }
// });
//res("Promesa cumplida");
//rej("Promesa Rechazada");

//.then que sirve para capturar cuando se resuelve
//.catch para capturar cuando se rechaza

export const ItemListContainer = () => {
  console.log(products);

  //console.log(task);
  // task
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div>
      {/* <Card ATRIBUTO y VALOR -  le paso los props que querramos/>  */}
      <Card producto="Maceta Cónica" price={2000} stock={50} />
      <Card producto="Velador" price={6000} stock={20} />
    </div>
  );
};
