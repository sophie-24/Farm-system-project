import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // 스타일 파일

const products = [
  { id: 1, name: "당근", price: 17.99, image: "/images/carrot.png" },
  { id: 2, name: "양파", price: 17.99, image: "/images/onion.png" },
  { id: 3, name: "토마토", price: 17.99, image: "/images/tomato.png" },
  { id: 4, name: "오이", price: 17.99, image: "/images/cucumber.png" },
  { id: 5, name: "상추", price: 17.99, image: "/images/lettuce.png" },
  { id: 6, name: "배추", price: 17.99, image: "/images/cabbage.png" },
  { id: 7, name: "깻잎", price: 17.99, image: "/images/perilla.png" },
  { id: 8, name: "감자", price: 17.99, image: "/images/potato.png" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log(`${product.name} added to cart.`);
    // 장바구니 로직 추가
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // 상품 상세 페이지로 이동
  };

  const handleFilterClick = () => {
    navigate("/filter"); // 필터 페이지로 이동
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <img src="/path/to/logo.png" alt="농사직서 로고" className="logo" />
        <input
          type="text"
          placeholder="Search for products..."
          className="search-bar"
        />
        <button className="filter-button" onClick={handleFilterClick}>
          Filters
        </button>
      </header>

      <main className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
            </div>
            <button
              className="add-to-cart-button"
              onClick={(e) => {
                e.stopPropagation(); // 부모 클릭 이벤트 방지
                handleAddToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Home;
