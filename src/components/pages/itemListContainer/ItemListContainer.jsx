import { Card } from "../../common/Card/Card";
import { products } from "../../../productos";
import { useEffect } from "react";
import { useState } from "react";

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
      {myProducts.map((prod) => {
        return (
          <Card
            img={prod.img}
            key={prod.id}
            title={prod.title}
            price={prod.price}
            stock={prod.stock}
            description={prod.description}
            category={prod.category}
          />
        );
      })}
      ;
    </div>
  );
};
