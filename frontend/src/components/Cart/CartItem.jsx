export default function CartItem({ product, product:{id, image, name, quantity, price} }) {
  return <li>
    <img src={image} alt={name}/>
     
  </li>;
}
