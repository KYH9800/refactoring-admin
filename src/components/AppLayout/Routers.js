import React from 'react';

// router
import { Routes, Route } from 'react-router-dom';

// page-components
import Login from '../../pages/login';
// 이용자관리
import Home from '../../pages'; // 메인 홈페이지
import Administrator from '../../pages/administrator'; // 관리자
// 단짝맺기관리
import SubscribePayment from '../../pages/subscribePayment';
import Report from '../../pages/report';
import Chatting from '../../pages/chatting';
// 놀이터관리
import ActivityPayment from '../../pages/activityPayment';
import Host from '../../pages/host';
import Activity from '../../pages/activity';
// 혜택관리
import Point from '../../pages/point';
import Coupon from '../../pages/coupon';
import Event from '../../pages/event';
import Announcement from '../../pages/announcement';
// 운영관리
import Sms from '../../pages/sms';
import Statistics from '../../pages/statistics';
import Marketing from '../../pages/marketing';
import ClickPercentage from '../../pages/clickPercentage';
import CustomerData from '../../pages/customerData';

// 페이지 모음, 라우팅
const Router = () => {
  // TODO

  return (
    <Routes>
      {/* 로그인 페이지 */}
      <Route path="/login" element={<Login />} />

      {/* 이용자관리 */}
      <Route path="/" element={<Home />} />
      <Route path="/administrator" element={<Administrator />} />

      {/* 단짝맺기관리 */}
      <Route path="/subscribePayment" element={<SubscribePayment />} />
      <Route path="/report" element={<Report />} />
      <Route path="/chatting" element={<Chatting />} />

      {/* 놀이터관리 */}
      <Route path="/activityPayment" element={<ActivityPayment />} />
      <Route path="/host" element={<Host />} />
      <Route path="/activity" element={<Activity />} />

      {/* 혜택관리 */}
      <Route path="/point" element={<Point />} />
      <Route path="/coupon" element={<Coupon />} />
      <Route path="/event" element={<Event />} />
      <Route path="/announcement" element={<Announcement />} />

      {/* 운영관리 */}
      <Route path="/sms" element={<Sms />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/marketing" element={<Marketing />} />
      <Route path="/clickPercentage" element={<ClickPercentage />} />
      <Route path="/customerData" element={<CustomerData />} />
    </Routes>
  );
};

export default Router;
