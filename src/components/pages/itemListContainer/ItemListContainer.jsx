import { products } from "../../../productos";
import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "../../common/ItemList/ItemList";

let myProductsPromise = new Promise((res, rej) => {
  setTimeout(() => {
    if (products.length === 0) {
      rej("Sin productos");
    } else {
      res(products);
    }
  }, 2500);
});

export const ItemListContainer = () => {
  //declaro el estado
  const [myProducts, setMyProducts] = useState([]);

  useEffect(() => {
    myProductsPromise
      .then((data) => {
        setMyProducts(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        // console.log("Siempre se ejecuta");
      });
  }, []);
  // console.log(myProducts);
  // const myProductsConMap = myProducts.map((prod) => prod.title);
  // console.log(myProductsConMap);

  return (
    <div>
      <ItemList myProducts={myProducts} />
    </div>
  );
};
