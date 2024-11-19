import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../firebase"; // Firebase 설정 가져오기
import { signInWithPopup } from "firebase/auth"; // Firebase 인증 메서드
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ id: "", password: "" });
  const [rememberId, setRememberId] = useState(false); // 아이디 저장 상태

  // 컴포넌트 마운트 시 로컬스토리지에서 아이디 불러오기
  useEffect(() => {
    const savedId = localStorage.getItem("rememberedId");
    if (savedId) {
      setForm((prev) => ({ ...prev, id: savedId }));
      setRememberId(true); // 체크박스를 활성화
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleRememberId = () => {
    setRememberId(!rememberId); // 아이디 저장 상태 토글
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberId) {
      localStorage.setItem("rememberedId", form.id); // 로컬스토리지에 아이디 저장
    } else {
      localStorage.removeItem("rememberedId"); // 로컬스토리지에서 아이디 삭제
    }
    console.log("로그인 성공:", form, "아이디 저장:", rememberId);
    navigate("/home"); // 홈 페이지로 이동
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("구글 로그인 성공:", user);
      navigate("/home"); // 홈 화면으로 이동
    } catch (error) {
      console.error("구글 로그인 오류:", error);
    }
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
          placeholder="아이디를 입력하세요."
          value={form.id}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호를 입력하세요."
          value={form.password}
          onChange={handleChange}
          required
        />

        <div className="remember-id">
          <input
            type="checkbox"
            id="rememberId"
            checked={rememberId}
            onChange={handleRememberId}
          />
          <label htmlFor="rememberId">아이디 저장</label>
        </div>

        <button type="submit" className="submit-button">
          로그인
        </button>
      </form>

      <button className="google-login-button" onClick={handleGoogleLogin}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          className="google-icon"
        />
        구글 계정으로 로그인
      </button>

      <div className="login-links">
        <button onClick={() => navigate("/find-id")}>아이디 찾기</button>
        <button onClick={() => navigate("/find-password")}>비밀번호 찾기</button>
        <button onClick={() => navigate("/register")}>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
