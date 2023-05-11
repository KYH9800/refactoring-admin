import React from 'react';

// styled-components
import styled from 'styled-components';

// 전체 레이아웃 > 상단 네비게이션바
const TopNavbar = () => {
  // TODO SETTING STATE IN HERE...

  // 알람
  const onClickAlert = () => {
    alert('준비중인 기능입니다.');
  };

  // 로그아웃
  const onClickLogout = () => {
    console.log('로그아웃!!');
  };

  return (
    <TopNavbarWrapper>
      <div className="top-left">관리자센터</div>

      <RightBtnWrapper className="top-right">
        <div className="admin-user-email">sksgur3217@gmail.com</div>

        <LineTag className="line" />
        <AlertButton onClick={onClickAlert}>
          <span>알림</span>
        </AlertButton>

        <LineTag className="line" />
        <LogoutButton onClick={onClickLogout}>
          <span>로그아웃</span>
        </LogoutButton>
      </RightBtnWrapper>
    </TopNavbarWrapper>
  );
};

export default TopNavbar;

const TopNavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #000000c4;

  width: 100%;
  height: 43px;

  // 관리자 센터
  .top-left {
    font-size: 15px;
    font-weight: 600;
    font-family: noto_sans_kr_bold;
    color: #fff;

    padding: 0 17px;
  }
`;

// 세로 기준선
const LineTag = styled.div`
  background-color: rgb(210 210 210);

  margin-left: 10px;
  margin-right: 10px;

  height: 16px;
  width: 1px;
`;

// 오른쪽 버튼모음
const RightBtnWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 0 17px;

  font-weight: 600;
  color: #fff;
`;

const AlertButton = styled.div`
  cursor: pointer;

  span:hover {
    color: #6981ff;
  }
`;

const LogoutButton = styled.div`
  cursor: pointer;

  span:hover {
    color: #ff2727;
  }
`;
