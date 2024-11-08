import "./card.css";
// export const Card = (props) => {
export const Card = ({ title, price, stock, description, img, category }) => {
  return (
    // <div className="card">
    //   <h2 className="card__title">Producto:{props.producto}</h2>
    //   <h2 className="card__price">Precio: ${props.price}</h2>
    //   <h2 className="card__stock">Stock:{props.stock}</h2>
    //   <img src={props.image} alt="" />
    // </div>
    <div className="card">
      <h2 className="card__title">Producto:{title}</h2>
      <h2 className="card__price">Precio: ${price}</h2>
      <h2 className="card__stock">Stock:{stock}</h2>
      <h2 className="card__stock">Descripcion:{description}</h2>
      <img src={img} alt="" />
      <h2 className="card__stock">Categoría:{category}</h2>
      <button>Agregar al Carrito</button>
    </div>
  );
};
