import React, { useEffect } from 'react';

// router
import { useNavigate } from 'react-router-dom';

// 로그인화면
const Login = () => {
  const navigate = useNavigate();

  // 로그인된 상태는 메인홈으로 이동
  useEffect(() => {
    if (true) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <div>
      <h1>로그인화면</h1>
    </div>
  );
};

export default Login;
