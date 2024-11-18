import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"; // CSS 파일 import

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    email: "",
    nickname: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 성공:", form);
    navigate("/"); // 회원가입 성공 후 로그인 페이지로 이동
  };

  return (
    <div className="register-container">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit} className="register-form">
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
        <label htmlFor="confirmPassword">비밀번호 확인</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="CONFIRM PASSWORD"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">이메일 주소</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="EMAIL"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          id="nickname"
          name="nickname"
          placeholder="NICKNAME"
          value={form.nickname}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
      <div className="login-link" onClick={() => navigate("/")}>
        로그인
      </div>
    </div>
  );
};

export default Register;
