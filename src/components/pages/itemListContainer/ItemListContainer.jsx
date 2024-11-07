import { Card } from "../../common/Card/Card";

export const ItemListContainer = ({ greetings }) => {
  return (
    <div>
      <h2>{greetings} </h2>
      {/* <Card ATRIBUTO y VALOR -  le paso los props que querramos/>  */}
      <Card producto="Maceta Cónica" price={2000} stock={50} />
      <Card producto="Velador" price={6000} stock={20} />
    </div>
  );
};
