import { useParams, Link } from 'react-router-dom';

function ProductDetailsPage() {
  const params = useParams();

  const id = params.productId;

  return (
    <>
      <h1>Product Details!</h1>
      <p>{id}</p>
      <p>
        <Link to='..' relative='path'>
          Back
        </Link>
      </p>
    </>
  );
}

export default ProductDetailsPage;
