import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ProductDetail.css"; // 스타일 파일

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 예제 데이터: 실제 데이터는 API나 props로 전달받을 수 있습니다.
  const product = {
    id: 1,
    name: "오이",
    price: 14900,
    image: "/images/cucumber.png",
    seller: "중구 필동, 직거래",
    title: "오이 한 박스 판매합니다",
    description: "신선하고 맛있습니다! 얼른 구매하세요~!",
    postedBy: "판매자",
    postedAt: "11시간 전",
  };

  const handlePurchase = () => {
    navigate("/checkout", { state: { product } }); // 결제 페이지로 상품 데이터 전달
  };

  return (
    <div className="product-detail-container">
      <header className="product-detail-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          &#8592; {/* 뒤로가기 화살표 */}
        </button>
        <h3>홈 &gt; 채소</h3>
      </header>

      <div className="product-detail-main">
        {/* 상품 이미지 */}
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-image" />
        </div>

        {/* 판매자 정보 */}
        <div className="product-seller">
          <h4>판매자</h4>
          <p>📍 {product.seller}</p>
        </div>
        
        {/* 구분선 */}
        <div className="horizontal-divider"></div>

        {/* 상품 상세 정보 */}
        <div className="product-detail-content">
          {/* 왼쪽: 제목, 작성자 정보, 글 내용 */}
          <div className="product-description">
            <h1>{product.title}</h1>
            <div className="product-meta">
              <span>{product.postedBy}</span>
              <span>{product.postedAt}</span>
            </div>
            <p>{product.description}</p>
          </div>
          {/* 구분선 추가 */}
          <div className="vertical-divider"></div>

          {/* 오른쪽: 상품 이름, 가격, 구매 버튼 */}
          <div className="product-purchase">
            <h2>{product.name}</h2>
            <p className="product-price">₩{product.price.toLocaleString()}</p>
            <button className="purchase-button" onClick={handlePurchase}>
              구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
