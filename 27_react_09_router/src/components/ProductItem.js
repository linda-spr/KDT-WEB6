const ProductItem = (props) => {
  const { product } = props;

  return (
    <ul>
      <li>상품명: {product.name}</li>
      <li>상세설명: {product.body.slice(0, 80)}...</li>
    </ul>
  );
};

export default ProductItem;
