import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // 스타일 파일

const Login = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("로그인 정보:", form);
    // 로그인 로직 추가
  };

  return (
    <div className="login-container">
      <h1>로그인</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">아이디</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="ID"
          value={form.email}
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
        <button type="submit" className="submit-button">로그인</button>
      </form>
      <div className="register-link" onClick={() => navigate("/register")}>
        회원가입
      </div>
    </div>
  );
};

export default Login;
