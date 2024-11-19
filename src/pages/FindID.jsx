import React from 'react';
import './FindID.css';

const FindID = () => {
  return (
    <div className="find-id-container">
      <h2>아이디 찾기</h2>
      <form className="find-id-form">
        <label htmlFor="name">이름</label>
        <p>이름을 입력해주세요.</p>
        <input type="text" id="name" placeholder="홍길동" />

        <label htmlFor="birth">생년월일</label>
        <p>생년월일 8자리를 입력해주세요.</p>
        <input type="date" id="birth" placeholder="YYYY-MM-DD" />

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
          <button type="button" className="btn">인증하기</button>
        </div>

        <button type="submit" className="submit-btn">아이디 찾기</button>
      </form>
    </div>
  );
};

export default FindID;
