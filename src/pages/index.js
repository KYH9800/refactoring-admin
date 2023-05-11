import React, { useEffect } from 'react';

// router
import { useNavigate } from 'react-router-dom';

// 이용자관리_회원
const Home = () => {
  const navigate = useNavigate();

  // 로그아웃 상태 로그인 페이지 이동
  useEffect(() => {
    if (!true) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
