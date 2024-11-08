const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.description}</h2>
      <img src={item.img} alt="" />
    </div>
  );
};

export default ItemDetail;
