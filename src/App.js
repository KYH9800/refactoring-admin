import React from 'react';

// router
import { BrowserRouter } from 'react-router-dom';

// CSS, styled-components
import styled from 'styled-components';
import './App.css';

// components
import TopNavbar from './components/AppLayout/TopNavbar';
import LeftNavbar from './components/AppLayout/LeftNavbar';
import Router from './components/AppLayout/Routers';

// 전체 레이아웃 설정 App
const App = () => {
  /*************************************
   * 로그인 여부에 따라 네비게이션바 여부 그려주기
   * redux 활용 state 관리
   *************************************/

  return (
    <BrowserRouter>
      {true ? (
        <div>
          <Header className="top-bar">
            <TopNavbar />
          </Header>

          <Empty className="top-empty-box" />

          <LeftNavbarWrapper className="left-menu">
            <LeftNavbar />
          </LeftNavbarWrapper>

          <MainWrapper className="flex-left-right">
            <LeftEmpty className="left-empty-box" />

            <main className="right-page">
              <Router />
            </main>
          </MainWrapper>
        </div>
      ) : (
        <main className="right-page">
          <Router />
        </main>
      )}
    </BrowserRouter>
  );
};

export default App;

// 상단 메인바
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

// 상단 빈공간
const Empty = styled.div`
  height: 43px;
`;

// 왼쪽 네비게이션바
const LeftNavbarWrapper = styled.div`
  border-right: 1px solid rgb(229, 229, 229);
  position: fixed;
  left: 0;

  width: 260px;
  height: 100vh;
`;

// 메인 화면이 나타나는 곳(라우팅 페이지)
const MainWrapper = styled.div`
  display: flex;
`;

// 왼쪽 빈공간
const LeftEmpty = styled.div`
  width: 260px;
`;
