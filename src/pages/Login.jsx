import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅
  const [form, setForm] = useState({ id: "", password: "" }); // 로그인 입력 상태

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 로그인 유효성 검사 (여기서는 단순히 홈 화면으로 이동)
    console.log("로그인 성공:", form);
    navigate("/home"); // 홈 화면으로 이동
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          id="id"
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          required
        />
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="PASSWORD"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">
          로그인
        </button>
      </form>
      <div className="register-link" onClick={() => navigate("/register")}>
        회원가입
      </div>
    </div>
  );
};

export default Login;
