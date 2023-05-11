import React from 'react';

// router
import { Link } from 'react-router-dom';

// styled-components
import styled from 'styled-components';

// 전체 레이아웃 > 왼쪽 메뉴바
const LeftNavbar = () => {
  return (
    <NavbarWrapper id="navbar-wrapper">
      <PartBox className="user-management">
        <h2>이용자관리</h2>

        <div className="link">
          <Link to="/">
            <div className="btn">회원</div>
          </Link>
          <Link to="/administrator">
            <div className="btn">관리자</div>
          </Link>
        </div>
      </PartBox>

      <PartBox className="friend-management">
        <h2>단짝맺기관리</h2>

        <div className="link">
          <Link to="/subscribePayment">
            <div className="btn">구독결제</div>
          </Link>
          <Link to="/report">
            <div className="btn">신고</div>
          </Link>
          <Link to="/chatting">
            <div className="btn">채팅</div>
          </Link>
        </div>
      </PartBox>

      <PartBox className="activity-management">
        <h2>놀이터관리</h2>

        <div className="link">
          <Link to="/activityPayment">
            <div className="btn">놀이터 결제</div>
          </Link>
          <Link to="/host">
            <div className="btn">호스트</div>
          </Link>
          <Link to="/activity">
            <div className="btn">놀이</div>
          </Link>
        </div>
      </PartBox>

      <PartBox className="benefits-management">
        <h2>혜택관리</h2>

        <div className="link">
          <Link to="/point">
            <div className="btn">포인트</div>
          </Link>
          <Link to="/coupon">
            <div className="btn">쿠폰</div>
          </Link>
          <Link to="/event">
            <div className="btn">이벤트</div>
          </Link>
          <Link to="/announcement">
            <div className="btn">공지</div>
          </Link>
        </div>
      </PartBox>

      <PartBox className="operation-management">
        <h2>운영관리</h2>

        <div className="link-bottom">
          <Link to="/sms">
            <div className="btn">SMS 발송</div>
          </Link>
          <Link to="/statistics">
            <div className="btn">통계</div>
          </Link>
          <Link to="/marketing">
            <div className="btn">마케팅</div>
          </Link>
          <Link to="/clickPercentage">
            <div className="btn">클릭률</div>
          </Link>
          <Link to="/customerData">
            <div className="btn">고객데이터</div>
          </Link>
        </div>
      </PartBox>

      <Footer className="footer">
        <div>시놀(주)</div>
        <div>사업자번호 584-88-03032</div>
        <div>법인등록번호 124411-0358061</div>
        <div>우리은행 1005-304-471988</div>
        <div>고객센터 02-508-5670</div>
        <div>카카오톡 @시놀</div>
      </Footer>
    </NavbarWrapper>
  );
};

export default LeftNavbar;

// 네브바 전체 랩핑
const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: 100%;
`;

// 소제목 묶음 상자
const PartBox = styled.div`
  h2 {
    font-size: 13px;
    color: rgb(121, 121, 121);

    margin: 8px 32px;
  }

  .link {
    border-bottom: 1px solid rgb(229, 229, 229);
  }

  .link a,
  .link-bottom a {
    text-decoration: none;
    color: #000;
  }

  .btn {
    cursor: pointer;
    font-size: 11px;
    font-weight: bold;

    width: 196px;
    padding: 7.3px 32px;
  }

  .btn:hover {
    color: rgb(66, 139, 247);
    background-color: rgba(66, 139, 247, 0.1);
  }
`;

// 하단 사이트 정보
const Footer = styled.footer`
  font-size: 10px;
  font-weight: 700;
  color: rgb(166 166 166);

  padding: 13px 32px;
`;
