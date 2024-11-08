import { Card } from "../../common/Card/Card";

const ItemList = ({ items }) => {
  return (
    <>
      <h2>Listado de productos</h2>
      <div>
        {items.map(
          ({ title, price, stock, description, img, category, id }) => (
            <Card
              key={id}
              title={title}
              price={price}
              stock={stock}
              description={description}
              image={img}
              category={category}
            />
          )
        )}
      </div>
    </>
  );
};

export default ItemList;
