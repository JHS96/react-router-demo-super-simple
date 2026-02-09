import { useParams } from 'react-router-dom';

function ProductDetailsPage() {
  const params = useParams();

  const id = params.productId;

  return (
    <>
      <h1>Product Details!</h1>
      <p>{id}</p>
    </>
  );
}

export default ProductDetailsPage;
