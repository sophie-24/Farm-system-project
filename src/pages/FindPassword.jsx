import React from 'react';
import './FindPassword.css';

const FindPassword = () => {
  return (
    <div className="find-password-container">
      <h2>비밀번호 찾기</h2>
      <form className="find-password-form">
        <label htmlFor="name">이름</label>
        <p>이름을 입력해주세요.</p>
        <input type="text" id="name" placeholder="홍길동" defaultValue="홍길동" />

        <label htmlFor="id">아이디</label>
        <p>아이디를 입력해주세요.</p>
        <input type="text" id="id" placeholder="영문 소문자" />

        <label htmlFor="email">이메일</label>
        <p>이메일을 입력해주세요.</p>
        <input type="email" id="email" placeholder="user@dgu.ac.kr" />

        <label htmlFor="phone">휴대전화 번호</label>
        <p>휴대전화 번호 11자리를 입력해주세요.</p>
        <div className="phone-container">
          <input type="tel" id="phone" placeholder="010-1234-5678" />
          <button type="button" className="btn">인증 요청</button>
        </div>

        <div className="phone-container">
          <input type="text" id="code" placeholder="인증번호 입력" />
          <button type="button" className="btn">인증</button>
        </div>

        <button type="submit" className="submit-btn">비밀번호 찾기</button>
      </form>
    </div>
  );
};

export default FindPassword;
