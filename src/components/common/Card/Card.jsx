export const Card = ({ title, price, stock }) => {
  //forma mas pro para hacerlo como queda arriba
  //export const Card = (props) => {
  //desestructuro el props
  //const { title, price, stock } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{price}</h3>
      <h3>{stock}</h3>
    </div>
  );
};
