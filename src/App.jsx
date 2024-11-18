import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 4초 동안 스플래시 화면 표시
    const timer = setTimeout(() => setIsLoading(false), 4000);
    return () => clearTimeout(timer); // 타이머 클리어
  }, []);

  return (
    <Router>
      {isLoading ? (
        <SplashScreen /> // 로딩 중 스플래시 화면
      ) : (
        <Routes>
          <Route path="/" element={<Login />} /> {/* 로그인 페이지 */}
          <Route path="/register" element={<Register />} /> {/* 회원가입 페이지 */}
        </Routes>
      )}
    </Router>
  );
};

export default App;
