import { Card } from "../../common/Card/Card";

const ItemList = ({ items }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div className="card_conteiner">
        {items.map(
          ({ id, title, price, stock, description, img, category }) => (
            <Card
              key={id}
              title={title}
              price={price}
              stock={stock}
              description={description}
              img={img}
              category={category}
              id={id}
            />
          )
        )}
      </div>
    </>
  );
};

export default ItemList;
