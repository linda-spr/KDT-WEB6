import { Link } from 'react-router-dom';

const ProductItem = (props) => {
  const { product } = props;
  console.log(product);

  return (
    <Link to={'/products/' + product.id}>
      <ul className="ProductItem">
        <li>상품명: {product.name}</li>
        <li>상세설명: {product.body.slice(0, 80)}...</li>
      </ul>
    </Link>
  );
};

export default ProductItem;
