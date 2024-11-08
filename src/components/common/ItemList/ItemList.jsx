import { Card } from "../Card/Card";

export const ItemList = ({ myProducts }) => {
  return myProducts.map(
    ({ id, title, price, stock, img, description, category }) => (
      <Card
        img={img}
        key={id}
        title={title}
        price={price}
        stock={stock}
        description={description}
        category={category}
      />
    )
  );
};
