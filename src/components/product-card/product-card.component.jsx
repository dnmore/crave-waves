import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="product-card-container">
      <div className="product-image">
        <img src={imageUrl} alt={`${name}`} />
      </div>

      <div className="product-card-body">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
