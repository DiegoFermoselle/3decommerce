import { Card } from "../Card/Card";

export const ItemList = ({ myProducts }) => {
  return myProducts.map(
    ({ id, title, price, stock, img, description, category }) => (
      <Card
        key={id}
        img={img}
        title={title}
        price={price}
        stock={stock}
        description={description}
        category={category}
      />
    )
  );
};
