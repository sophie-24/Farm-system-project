import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Filter.css"; // 스타일 파일

const Filter = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    price: [0, 99999],
    weight: [0, 100],
    region: [],
    harvestTime: "", // 단일 선택을 위해 문자열로 변경
    sellingMethod: [],
  });

  const handleRangeChange = (type, values) => {
    setFilters((prev) => ({
      ...prev,
      [type]: values,
    }));
  };

  const handleToggleSelection = (type, value) => {
    if (type === "harvestTime") {
      // 수확시기 단일 선택 처리
      setFilters((prev) => ({
        ...prev,
        harvestTime: prev.harvestTime === value ? "" : value, // 이미 선택된 값이면 해제
      }));
    } else {
      // 다중 선택 처리
      setFilters((prev) => {
        const currentValues = prev[type];
        const isSelected = currentValues.includes(value);
        return {
          ...prev,
          [type]: isSelected
            ? currentValues.filter((item) => item !== value)
            : [...currentValues, value],
        };
      });
    }
  };

  const applyFilters = () => {
    console.log("적용된 필터:", filters);
    navigate("/home", { state: { filters } }); // 필터를 홈 페이지로 전달
  };

  return (
    <div className="filter-container">
      <header className="filter-header">
        <input
          type="text"
          placeholder="상품 이름"
          value={filters.search}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, search: e.target.value }))
          }
          className="search-bar"
        />
      </header>

      <div className="filter-section">
        <h3>정보 입력</h3>

        {/* 카테고리 선택 */}
        <div className="filter-category">
          <h4>카테고리</h4>
          {["채소", "야채", "과일", "곡물", "기타"].map((category) => (
            <button
              key={category}
              className={`category-button ${
                filters.category === category ? "selected" : ""
              }`}
              onClick={() =>
                setFilters((prev) => ({ ...prev, category: category }))
              }
            >
              {category}
            </button>
          ))}
        </div>

        {/* 가격 및 무게 슬라이더 */}
        <div className="filter-range">
          <div className="filter-range-item">
            <h4>가격 (₩)</h4>
            <input
              type="range"
              min="0"
              max="99999"
              step="1000"
              value={filters.price[0]}
              onChange={(e) =>
                handleRangeChange("price", [Number(e.target.value), filters.price[1]])
              }
            />
            <input
              type="range"
              min="0"
              max="99999"
              step="1000"
              value={filters.price[1]}
              onChange={(e) =>
                handleRangeChange("price", [filters.price[0], Number(e.target.value)])
              }
            />
            <div>₩{filters.price[0]} - ₩{filters.price[1]}</div>
          </div>

          <div className="filter-range-item">
            <h4>무게 (kg)</h4>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={filters.weight[0]}
              onChange={(e) =>
                handleRangeChange("weight", [Number(e.target.value), filters.weight[1]])
              }
            />
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={filters.weight[1]}
              onChange={(e) =>
                handleRangeChange("weight", [filters.weight[0], Number(e.target.value)])
              }
            />
            <div>{filters.weight[0]}kg - {filters.weight[1]}kg</div>
          </div>
        </div>

        {/* 지역 선택 */}
        <div className="filter-options">
          <h4>지역</h4>
          {["서울", "경기도", "강원도", "충청남도", "충청북도", "전라남도", "경상남도", "제주도"].map(
            (region) => (
              <button
                key={region}
                className={`option-button ${
                  filters.region.includes(region) ? "selected" : ""
                }`}
                onClick={() => handleToggleSelection("region", region)}
              >
                {region}
              </button>
            )
          )}
        </div>

        {/* 수확 시기 선택 */}
        <div className="filter-options">
          <h4>수확시기</h4>
          {["3일 이내", "일주일 이내", "한달 이내", "3개월 이내", "6개월 이내", "1년 이내"].map(
            (time) => (
              <button
                key={time}
                className={`option-button ${
                  filters.harvestTime === time ? "selected" : ""
                }`}
                onClick={() => handleToggleSelection("harvestTime", time)}
              >
                {time}
              </button>
            )
          )}
        </div>

        {/* 판매 방식 선택 */}
        <div className="filter-options">
          <h4>판매방식</h4>
          {["택배", "방문수령"].map((method) => (
            <button
              key={method}
              className={`option-button ${
                filters.sellingMethod.includes(method) ? "selected" : ""
              }`}
              onClick={() => handleToggleSelection("sellingMethod", method)}
            >
              {method}
            </button>
          ))}
        </div>
      </div>

      {/* 적용하기 버튼 */}
      <button className="apply-button" onClick={applyFilters}>
        적용하기
      </button>
    </div>
  );
};

export default Filter;
