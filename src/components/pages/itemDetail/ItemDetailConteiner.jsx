import { useEffect, useState } from "react";
import { products } from "../../../products";
import ItemDetail from "./ItemDetail";
//HOOK PARA ACCEDER A LOS PARAMETROS DINAMICOS / SIEMPRE useParams nos devuelve un OBJETO
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let productSelected = products.find((products) => products.id === id);
    setItem(productSelected);
  }, [id]);

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;
